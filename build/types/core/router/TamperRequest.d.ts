declare class TamperRequest {
    routeName: string;
    params: any;
    uri: string;
    uriTemplate: string;
    route: Route | null;
    router: Router | null;
    constructor(result?: Result);
}
export default TamperRequest;
