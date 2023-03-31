import $ from 'jquery';

import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';
import WssqlBridge from 'core/wssql/WssqlBridge';
import {WssqlRemoteDatabase} from 'core/wssql/WssqlRemoteDatabase';
import {ElementMarkerCallback} from 'core/presence/PresenceState';
import PresencePayloadInterface from 'core/presence/PresencePayloadInterface';
import {secondsToHHMMSS} from 'util/time';
import PipedriveHelper from 'controller/Pipedrive/PipedriveHelper';

interface DealCheckPayload extends PresencePayloadInterface {
	email: string;
	session: string;
}

class ContentStudioTools extends TamperController {
	controllerKey: string;
	csBridge: WssqlBridge;
	bsBridge: WssqlBridge;

	run = (request: TamperRequest): void => {
		this.controllerKey = request.routeName;

		this.csBridge = WssqlBridge.connect(WssqlRemoteDatabase.ContentStudio);
		this.bsBridge = WssqlBridge.connect(WssqlRemoteDatabase.Backstage);

		this.dealSyncAction(request);
	};

	dealSyncAction = (request: TamperRequest) => {
		const checkKey = `${this.controllerKey}_dealSyncAction`;
		const getAnchorEmail = () => {
			return PipedriveHelper.getCustomFieldValueElementByName('E-mail').find('a').first();
		};
		const getAnchorSession = () => {
			return PipedriveHelper.getCustomFieldValueElementByName('Session');
		};

		this.checkFor(
			checkKey,
			() => {
				return getAnchorEmail().text().trim() !== '' && getAnchorSession().text().trim() !== '' && document.location.href.match('/deal/');
			},
			(elementMarker: ElementMarkerCallback): DealCheckPayload => {
				const $anchorEmail = getAnchorEmail();
				const $anchorSession = getAnchorSession();

				elementMarker($anchorEmail[0]);
				elementMarker($anchorSession[0]);

				const email = $anchorEmail.text().trim();
				const session = $anchorSession.text().trim();

				return {email, session};
			},
			500,
			300,
			this.dealMount,
			this.dealUnmount
		);
	};

	dealMount = (dealCheckPayload: DealCheckPayload): void => {
		this.csBridge
			.getRowSingleOrNull(
				`
					SELECT r.redundant_time_spent as timespent, date(r.redundant_last_connection) as lastconn, r.redundant_progression as progression FROM contentstudio.cs_registration r
					LEFT JOIN contentstudio.cs_learner l ON l.id = r.learner_id
					LEFT JOIN contentstudio.cs_session s ON s.id = r.session_id
					WHERE l.email = '${dealCheckPayload.email}' and s.code = '${dealCheckPayload.session}'`
			)
			.then((result) => {
				if (!result) {
					return;
				}

				const progression: number = parseFloat(result['progression']);
				const timespent: number = parseFloat(result['timespent']);
				const lastconn: string = result['lastconn'];

				PipedriveHelper.getCustomFieldValueElementByName('Pourcentage de progression').append(PipedriveHelper.getBadgeValueView(`${this.controllerKey}_progression`, `${Math.floor(parseFloat(progression.toFixed(2)) * 100)} %`));

				PipedriveHelper.getCustomFieldValueElementByName('Temps passé').append(
					PipedriveHelper.getBadgeValueView(
						`${this.controllerKey}_timespent`,
						`${secondsToHHMMSS({
							seconds: timespent,
							hideHourIfZero: false,
							hideMinuteIfZero: false,
							hideSecondIfZero: false,
							noLeadingZeroMinuteIfHeader: false,
							noLeadingZeroSecondIfHeader: false,
						})}`
					)
				);

				PipedriveHelper.getCustomFieldValueElementByName('Dernière Connexion').append(PipedriveHelper.getBadgeValueView(`${this.controllerKey}_lastconn`, `${lastconn}`));
			});
	};

	dealUnmount = (dealCheckPayload: DealCheckPayload): void => {
		$(`#${this.controllerKey}_progression`).remove();
		$(`#${this.controllerKey}_timespent`).remove();
		$(`#${this.controllerKey}_lastconn`).remove();
	};
}

export default ContentStudioTools;
