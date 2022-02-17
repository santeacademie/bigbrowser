import TamperController from '../../TamperController';
import TamperRequest from '../../../core/router/TamperRequest';
declare class ReachCounter extends TamperController {
    loaded: boolean;
    hashTryReachField: string;
    run: (request: TamperRequest) => void;
    _injectScript: () => void;
    launchTryReach: () => void;
    addButtonToPopover: () => void;
    subOneTryReach: ($item: any) => void;
    addOneTryReach: ($item: any) => void;
}
export default ReachCounter;
