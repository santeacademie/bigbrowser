declare module 'uri-template-router' {
	const Result: Result;
	const Router: Router;
	const Route: Route;
}

type Route = {

};

type Result = {
	matchValue: string;
	params: object;
	uri: string;
	uriTemplate: string;
	route: Route;
	router: Router;
};

type Router = {
	new(): Router;
	addTemplate: (pattern:string, options:object, name:string) => void;
	resolveURI: (uri: string) => Result;
};