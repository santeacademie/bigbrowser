class TamperRequest {
	routeName: string;
	params: any;
	uri: string;
	uriTemplate: string;
	route: Route | null;
	router: Router | null;

	constructor(result?: Result) {
		this.routeName = result?.matchValue || '';
		this.params = result?.params || {};
		this.uri = result?.uri || '';
		this.uriTemplate = result?.uriTemplate || '';
		this.route = result?.route || null;
		this.router = result?.router || null;
	}
}

export default TamperRequest;
