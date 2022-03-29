/* eslint-disable no-unused-vars */
import TamperRequest from 'core/router/TamperRequest';
import WaiterScheduler from 'core/Waiter/WaiterScheduler';

abstract class TamperController {
	constructor() {}

	waitFor = (isReadyCallback: () => boolean, ms?: number): Promise<void> => {
		return new WaiterScheduler(ms).waitForChecker(isReadyCallback);
	};

	abstract run(request: TamperRequest): void;
}

export default TamperController;
