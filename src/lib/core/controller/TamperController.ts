import TamperRequest from '../router/TamperRequest';

abstract class TamperController {
	constructor() {}

	abstract run(request: TamperRequest): void;
}

export default TamperController;
