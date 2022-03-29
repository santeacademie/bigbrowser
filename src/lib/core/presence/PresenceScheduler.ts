import PresenceState, {ElementMarkerCallback} from './PresenceState';

class PresenceScheduler {
	ms: number;
	checkKey?: string | undefined;
	presenceState: PresenceState;
	presenceInterval: NodeJS.Timeout;

	static FOREVER_ATTRIBUTE_NAME = 'wait-forever';

	constructor(checkKey: string, ms?: number) {
		this.checkKey = checkKey;
		this.ms = ms || 100;
		this.presenceState = new PresenceState();
		this.presenceInterval = this._startWaitLoop();
	}

	_startWaitLoop = (): NodeJS.Timeout => {
		return setInterval(() => {
			if (!this.presenceState.checker()) {
				return;
			}

			const foreverComputedPair = PresenceScheduler.FOREVER_ATTRIBUTE_NAME + '="' + this.checkKey + '"';
			const checkKeyInstances = document.querySelectorAll<HTMLElement>('[' + foreverComputedPair + ']');
			let present = false;

			for (let i = 0; i < checkKeyInstances.length; i++) {
				const el = checkKeyInstances[i];

				if (el.offsetParent != null) {
					present = true;
					break;
				}
			}

			if (!present) {
				this.presenceState.processor((element: HTMLElement): void => {
					element.setAttribute(PresenceScheduler.FOREVER_ATTRIBUTE_NAME, this.checkKey || '');
				});
			}
		}, this.ms);
	};

	waitForChecker = (readyCallback: () => boolean, processCallback: (elementMarker: ElementMarkerCallback) => any): void => {
		this.presenceState.checker = readyCallback;
		this.presenceState.processor = processCallback;
	};
}

export default PresenceScheduler;
