import TamperRequest from 'core/router/TamperRequest';
declare abstract class TamperController {
    constructor();
    abstract run(request: TamperRequest): void;
}
export default TamperController;
