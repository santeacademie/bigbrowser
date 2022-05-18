declare class WaiterState {
    checker: () => boolean;
    resolver: () => void;
    constructor(checker?: () => boolean, resolver?: () => void);
}
export default WaiterState;
