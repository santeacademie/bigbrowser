import {WssqlRemoteDatabase} from './WssqlRemoteDatabase';
import WssqlPendingRequest from './WssqlPendingRequest';
import {WssqlResponse} from './WssqlResponse';

class WssqlBridge {
	static socket: WebSocket | null = null;
	static queryIdAccumulator: number = 0;
	static pendingRequests: {[key: number]: WssqlPendingRequest} = {};

	remoteDatabase: WssqlRemoteDatabase;

	constructor(remoteDatabase: WssqlRemoteDatabase) {
		this.remoteDatabase = remoteDatabase;
	}

	public static connect = (remoteDatabase: WssqlRemoteDatabase): WssqlBridge => {
		if (this.socket === null) {
			this.socket = new WebSocket('wss://bigbrowser.santeacademie.com/wssql');
		}

		const bridge: WssqlBridge = new WssqlBridge(remoteDatabase);

		this.socket.onopen = function (e: Event) {
			console.log('[open] WSSQL Connection established');
		};

		this.socket.onmessage = function (event: MessageEvent) {
			try {
				const response: WssqlResponse = JSON.parse(event.data);

				if (typeof response.queryId !== 'undefined' && typeof response.result !== 'undefined' && WssqlBridge.pendingRequests[response.queryId]) {
					WssqlBridge.pendingRequests[response.queryId].resolver(JSON.parse(response.result));
					delete WssqlBridge.pendingRequests[response.queryId];
				}
			} catch {
				console.error(`[message] WSSQL Data received from server: ${event.data}`);
			}
		};

		this.socket.onclose = function (event: CloseEvent) {
			if (event.wasClean) {
				console.log(`[close] WSSQL Connection closed cleanly, code=${event.code} reason=${event.reason}`);
			} else {
				console.log('[close] WSSQL Connection died');
			}
		};

		this.socket.onerror = function (error: Event) {
			console.error(`[error] WSSQL ${error}`);
		};

		return bridge;
	};

	getRowSingleOrNull = (query: string): Promise<void> => {
		return this.getRows(query).then((result: any) => {
			return new Promise((resolve, reject) => {
				if (result !== null && result.length !== 0) {
					return resolve(result[0]);
				}

				return resolve(null);
			});
		});
	};

	getRows = (query: string): Promise<void> => {
		if (!WssqlBridge.socket.readyState) {
			return new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve(this.getRows(query));
				}, 1000); // Retry in 1 second
				return;
			});
		}

		const queryId = WssqlBridge.queryIdAccumulator++;

		this._pushRequest(queryId);

		WssqlBridge.socket.send(
			JSON.stringify({
				database: this.remoteDatabase,
				id: queryId,
				query: query,
			})
		);

		return new Promise<void>((resolve: () => void) => {
			WssqlBridge.pendingRequests[queryId].resolver = resolve;
		});
	};

	_pushRequest = (queryId: number) => {
		WssqlBridge.pendingRequests[queryId] = new WssqlPendingRequest(queryId, null);
	};
}

export default WssqlBridge;
