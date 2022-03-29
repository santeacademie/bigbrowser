export type ElementMarkerCallback = (element: HTMLElement) => void;

class PresenceState {
	checker: () => boolean;
	processor: (elementMarkerCallback: ElementMarkerCallback) => void;

	constructor(checker?: () => boolean, processor?: (elementMarkerCallback: ElementMarkerCallback) => void) {
		this.checker = checker || (() => true);
		this.processor = processor || (() => {});
	}
}

export default PresenceState;
