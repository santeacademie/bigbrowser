import TamperRequest from 'core/router/TamperRequest';
import { ElementMarkerCallback } from 'core/presence/PresenceState';
import PresencePayloadInterface from 'core/presence/PresencePayloadInterface';
declare abstract class TamperController {
    constructor();
    waitFor: (readyCallback: () => boolean, ms?: number) => Promise<any>;
    checkFor: (checkKey: string, readyCallback: () => boolean, processCallback: (elementMarker: ElementMarkerCallback) => PresencePayloadInterface | null, ms?: number, maxAge?: number, mount?: ((payload: PresencePayloadInterface) => void) | undefined, unmount?: ((payload: PresencePayloadInterface) => void) | undefined) => void;
    abstract run(request: TamperRequest): void;
}
export default TamperController;
