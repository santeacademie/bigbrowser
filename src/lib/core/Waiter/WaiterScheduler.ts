import WaiterState from './WaiterState';

class WaiterScheduler {
	ms: number;
	waiterState: WaiterState;
	waiterInterval: NodeJS.Timeout;

	constructor(ms?: number) {
		this.ms = ms || 100;
		this.waiterState = new WaiterState();
		this.waiterInterval = this._startWaitLoop();
	}

	_startWaitLoop = (): NodeJS.Timeout => {
		return setInterval(() => {
			if (this.waiterState.checker()) {
				this.waiterState.resolver();
				clearInterval(this.waiterInterval);
			}
		}, this.ms);
	};

	waitForChecker = (isReadyCallback: () => boolean): Promise<void> => {
		this.waiterState.checker = isReadyCallback;

		return new Promise<void>((resolve) => {
			this.waiterState.resolver = resolve;
		});
	};
}

export default WaiterScheduler;
