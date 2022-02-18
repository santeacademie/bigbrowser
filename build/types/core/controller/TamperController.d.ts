import TamperRequest from '../router/TamperRequest';
declare abstract class TamperController {
    constructor();
    abstract run(request: TamperRequest): void;
}
export default TamperController;
