import PresencePayloadInterface from 'core/presence/PresencePayloadInterface';
export declare type ElementMarkerCallback = (element: HTMLElement) => void;
declare class PresenceState {
    checker: () => boolean;
    processor: (elementMarkerCallback: ElementMarkerCallback) => PresencePayloadInterface | null;
    constructor(checker?: () => boolean, processor?: (elementMarkerCallback: ElementMarkerCallback) => PresencePayloadInterface | null);
}
export default PresenceState;
