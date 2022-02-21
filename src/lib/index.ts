import TamperRouter from 'core/router/TamperRouter';

class App {
	router: TamperRouter;

	constructor() {
		this.router = new TamperRouter();
	}

	init = (): void => {
		this.router.init();
	};
}

export default App;

const app = new App();
app.init();
