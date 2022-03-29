/// <reference types="node" />
import WaiterState from './WaiterState';
declare class WaiterScheduler {
    ms: number;
    waiterState: WaiterState;
    waiterInterval: NodeJS.Timeout;
    constructor(ms?: number);
    _startWaitLoop: () => NodeJS.Timeout;
    waitForChecker: (isReadyCallback: () => boolean) => Promise<void>;
}
export default WaiterScheduler;
