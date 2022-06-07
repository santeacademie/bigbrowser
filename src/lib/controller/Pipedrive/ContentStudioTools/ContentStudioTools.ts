import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';
import WssqlBridge from 'core/wssql/WssqlBridge';
import {WssqlRemoteDatabase} from 'core/wssql/WssqlRemoteDatabase';

class ContentStudioTools extends TamperController {
	run = (request: TamperRequest): void => {
		const csBridge: WssqlBridge = WssqlBridge.connect(WssqlRemoteDatabase.ContentStudio);

		csBridge.execute('Select * from contentstudio.cs_learner LIMIT 3').then((result: any) => {
			console.log(result);
		});
	};
}

export default ContentStudioTools;
