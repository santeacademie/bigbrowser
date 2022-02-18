import TamperController from '../../../core/controller/TamperController';
import TamperRequest from '../../../core/router/TamperRequest';
declare class ReachCounter extends TamperController {
    loaded: boolean;
    focusedFieldKey: string | undefined;
    run: (request: TamperRequest) => void;
    _grabFieldKey: (regexField: RegExp, searchFieldKey: string) => string | undefined;
    _launchTryReach: () => void;
    _addButtonToPopover: () => void;
    _subOneTryReach: ($item: any) => void;
    _addOneTryReach: ($item: any) => void;
}
export default ReachCounter;
