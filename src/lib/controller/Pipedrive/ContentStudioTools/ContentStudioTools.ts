import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';
import WssqlBridge from 'core/wssql/WssqlBridge';
import {WssqlRemoteDatabase} from 'core/wssql/WssqlRemoteDatabase';
import {ElementMarkerCallback} from 'core/presence/PresenceState';
import PresencePayloadInterface from 'core/presence/PresencePayloadInterface';
import $ from 'jquery';
import {secondsToHHMMSS} from '../../../util/time';

interface DealCheckPayload extends PresencePayloadInterface {
	email: string;
	session: string;
}

class ContentStudioTools extends TamperController {
	csBridge: WssqlBridge;

	run = (request: TamperRequest): void => {
		this.csBridge = WssqlBridge.connect(WssqlRemoteDatabase.ContentStudio);
		this.dealSyncAction(request);
	};

	getCustomFieldValueElementByName = (label: string) => {
		return $('[data-test=field-label]:visible')
			.filter(function () {
				return $(this).text().trim() == label;
			})
			.eq(0)
			.parents('.editable')
			.find('.value');
	};

	getBadgeValueView = (id: string, value: any): string => {
		return `
			<div id="${id}" style="font-weight:bold;color: white; max-height: 16px; display: flex; margin-top:3px; margin-bottom: 8px; max-width: max-content; flex-direction: row; justify-content: center; align-items: end; text-align: center; border-radius: 20px; font-size: 12px; padding: 2px 15px;background: rgb(141,71,222);background: linear-gradient(196deg, rgba(141,71,222,1) 0%, rgba(111,101,255,1) 100%);">
				${value}
			</div>
		`.trim();
	};

	dealSyncAction = (request: TamperRequest) => {
		const checkKey = `${request.routeName}_dealSyncAction`;
		const getAnchorEmail = () => {
			return $('[data-test=email-label]:visible').eq(0);
		};
		const getAnchorSession = () => {
			return this.getCustomFieldValueElementByName('Session');
		};

		this.checkFor(
			checkKey,
			() => {
				return getAnchorSession().length !== 0 && getAnchorEmail().length !== 0 && document.location.href.match('/deal/');
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
			(dealCheckPayload: DealCheckPayload) => {
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

						this.getCustomFieldValueElementByName('Pourcentage de progression').append(this.getBadgeValueView(`${request.routeName}_progression`, `${parseFloat(progression.toFixed(2)) * 100} %`));

						this.getCustomFieldValueElementByName('Temps passé').append(
							this.getBadgeValueView(
								`${request.routeName}_timespent`,
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

						this.getCustomFieldValueElementByName('Dernière Connexion').append(this.getBadgeValueView(`${request.routeName}_lastconn`, `${lastconn}`));
					});
			},
			(dealCheckPayload: DealCheckPayload) => {
				$(`#${request.routeName}_progression`).remove();
				$(`#${request.routeName}_timespent`).remove();
				$(`#${request.routeName}_lastconn`).remove();
			}
		);
	};
}

export default ContentStudioTools;
