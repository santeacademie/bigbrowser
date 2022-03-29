/* eslint-disable no-unused-vars */
import TamperRequest from 'core/router/TamperRequest';
import WaiterScheduler from 'core/waiter/WaiterScheduler';
import PresenceScheduler from 'core/presence/PresenceScheduler';
import {ElementMarkerCallback} from 'core/presence/PresenceState';

abstract class TamperController {
	constructor() {}

	waitFor = (readyCallback: () => boolean, ms?: number): Promise<any> => {
		return new WaiterScheduler(ms).waitForChecker(readyCallback);
	};

	checkFor = (checkKey: string, readyCallback: () => boolean, processCallback: (elementMarker: ElementMarkerCallback) => any, ms?: number): void => {
		return new PresenceScheduler(checkKey, ms).waitForChecker(readyCallback, processCallback);
	};

	abstract run(request: TamperRequest): void;
}

export default TamperController;
