/* eslint-disable no-unused-vars */
import TamperRequest from 'core/router/TamperRequest';
import WaiterScheduler from 'core/waiter/WaiterScheduler';
import PresenceScheduler from 'core/presence/PresenceScheduler';
import {ElementMarkerCallback} from 'core/presence/PresenceState';
import PresencePayloadInterface from 'core/presence/PresencePayloadInterface';

abstract class TamperController {
	constructor() {}

	waitFor = (readyCallback: () => boolean, ms?: number): Promise<any> => {
		return new WaiterScheduler(ms).waitForChecker(readyCallback);
	};

	checkFor = (
		checkKey: string,
		readyCallback: () => boolean,
		processCallback: (elementMarker: ElementMarkerCallback) => PresencePayloadInterface | null,
		ms?: number,
		maxAge?: number,
		mount?: (payload: PresencePayloadInterface) => void,
		unmount?: (payload: PresencePayloadInterface) => void
	): void => {
		return new PresenceScheduler(checkKey, ms, maxAge, mount, unmount).waitForChecker(readyCallback, processCallback);
	};

	abstract run(request: TamperRequest): void;
}

export default TamperController;
