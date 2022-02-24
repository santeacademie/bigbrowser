import {Router} from 'uri-template-router';

import routes from 'config/routes.json';
import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';

type TamperControllers = {
	[key: string]: TamperController;
};

class TamperRouter {
	configRoutes: any;
	controllers: TamperControllers;
	router: Router;

	constructor() {
		this.controllers = {};
		this.router = new Router();
	}

	init = (): void => {
		this.configRoutes = routes['routes'];

		this.configRoutes.forEach((route: any) => {
			this._checkRoute(route.name, route.patterns, route.action, route.debug);
		});
	};

	_checkRoute = (name: string, patterns: string[], action: string, debug: boolean): void => {
		const url = routes['debug']['url'] ?? document.location.href;
		let resolvedRouter: Result | undefined = undefined;

		for (let r = 0; r < patterns.length; r++) {
			this.router.addTemplate(patterns[r], {}, name);
			resolvedRouter = this.router.resolveURI(url);
			console.log(resolvedRouter)

			if (resolvedRouter) {
				break;
			}
		}

		if (resolvedRouter || debug) {
			const [controllerDirectory, controllerName] = action.split(':');
			this._instantiateController(controllerDirectory, controllerName, new TamperRequest(resolvedRouter));
		}
	};

	_instantiateController = (directory: string, name: string, request: TamperRequest): void => {
		import(/* webpackMode: "eager" */ `../../controller/${directory}/${name}/${name}`).then((module) => {
			const instance: TamperController = new module.default();
			const parent: string = Object.getPrototypeOf(Object.getPrototypeOf(instance)).constructor.name;

			if (parent !== TamperController.name) {
				throw new Error(`Controller ${directory}:${name} is not a TamperController`);
			}

			if (!instance.run) {
				throw new Error(`Controller ${directory}:${name} has no 'run' method`);
			}

			console.debug(`Invoke ${directory}:${name} controller`);
			this.controllers[name] = instance;
			instance.run(request);
		});
	};
}

export default TamperRouter;
