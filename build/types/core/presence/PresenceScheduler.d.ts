/// <reference types="node" />
import PresenceState, { ElementMarkerCallback } from './PresenceState';
declare class PresenceScheduler {
    ms: number;
    checkKey?: string | undefined;
    presenceState: PresenceState;
    presenceInterval: NodeJS.Timeout;
    static FOREVER_ATTRIBUTE_NAME: string;
    constructor(checkKey: string, ms?: number);
    _startWaitLoop: () => NodeJS.Timeout;
    waitForChecker: (readyCallback: () => boolean, processCallback: (elementMarker: ElementMarkerCallback) => any) => void;
}
export default PresenceScheduler;
