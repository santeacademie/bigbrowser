import TamperController from '../controller/TamperController';
import TamperRequest from './TamperRequest';
declare type TamperControllers = {
    [key: string]: TamperController;
};
declare class TamperRouter {
    configRoutes: any;
    controllers: TamperControllers;
    router: Router;
    constructor();
    init: () => void;
    _checkRoute: (name: string, patterns: string[], action: string, debug: boolean) => void;
    _instantiateController: (directory: string, name: string, request: TamperRequest) => void;
}
export default TamperRouter;
