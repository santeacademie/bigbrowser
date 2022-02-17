declare class TamperRequest {
    routeName: string;
    params: any;
    uri: string;
    uriTemplate: string;
    route: Route;
    router: Router;
    constructor(result?: Result);
}
export default TamperRequest;
