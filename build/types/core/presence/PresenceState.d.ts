export declare type ElementMarkerCallback = (element: HTMLElement) => void;
declare class PresenceState {
    checker: () => boolean;
    processor: (elementMarkerCallback: ElementMarkerCallback) => void;
    constructor(checker?: () => boolean, processor?: (elementMarkerCallback: ElementMarkerCallback) => void);
}
export default PresenceState;
