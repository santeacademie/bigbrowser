import TamperRequest from 'core/router/TamperRequest';
import { ElementMarkerCallback } from 'core/presence/PresenceState';
declare abstract class TamperController {
    constructor();
    waitFor: (readyCallback: () => boolean, ms?: number | undefined) => Promise<any>;
    checkFor: (checkKey: string, readyCallback: () => boolean, processCallback: (elementMarker: ElementMarkerCallback) => any, ms?: number | undefined) => void;
    abstract run(request: TamperRequest): void;
}
export default TamperController;
