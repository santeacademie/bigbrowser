/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import PresenceState, { ElementMarkerCallback } from './PresenceState';
import PresencePayloadInterface from 'core/presence/PresencePayloadInterface';
declare class PresenceScheduler {
    mount: (payload: PresencePayloadInterface) => void;
    unmount: (payload: PresencePayloadInterface) => void;
    ms: number;
    maxAge: number;
    expirationTimestamp: number;
    checkKey?: string | undefined;
    presenceState: PresenceState;
    presenceInterval: NodeJS.Timeout;
    payload: PresencePayloadInterface | null;
    static FOREVER_ATTRIBUTE_NAME: string;
    constructor(checkKey: string, ms?: number, maxAge?: number, mount?: (payload: PresencePayloadInterface) => void, unmount?: (payload: PresencePayloadInterface) => void);
    _scheduleExpiration: () => void;
    _removeMarkedElements: () => void;
    _startWaitLoop: () => NodeJS.Timeout;
    waitForChecker: (readyCallback: () => boolean, processCallback: (elementMarker: ElementMarkerCallback) => PresencePayloadInterface | null) => void;
}
export default PresenceScheduler;
