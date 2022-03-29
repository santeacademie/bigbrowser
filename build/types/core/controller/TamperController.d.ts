import TamperRequest from 'core/router/TamperRequest';
declare abstract class TamperController {
    constructor();
    waitFor: (isReadyCallback: () => boolean, ms?: number | undefined) => Promise<void>;
    abstract run(request: TamperRequest): void;
}
export default TamperController;
