import TamperController from '../../TamperController';
import TamperRequest from '../../../core/router/TamperRequest';
declare class ReachCounter extends TamperController {
    loaded: boolean;
    hashTryReachField: string;
    run: (request: TamperRequest) => void;
    _grabFieldKey: () => string | undefined;
    _launchTryReach: () => void;
    _addButtonToPopover: () => void;
    _subOneTryReach: ($item: any) => void;
    _addOneTryReach: ($item: any) => void;
}
export default ReachCounter;
