import TamperRequest from '@core/router/TamperRequest';

abstract class TamperController {
	constructor() {}

	abstract run(request: TamperRequest): void;
}

export default TamperController;
