import $ from 'jquery';

import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';
import {ElementMarkerCallback} from 'core/presence/PresenceState';
import PresencePayloadInterface from 'core/presence/PresencePayloadInterface';

class BackstageTools extends TamperController {
	run = (request: TamperRequest): void => {
		this.stealthPopupListener();
		this.personSyncAction(request);
	};

	stealthPopupListener = (ms?: number) => {
		$(document).on('click', '.stealth-popup-opener', (event: JQuery.ClickEvent) => {
			const $this = $(event.target);
			const win = window.open($this.data('url'), '_', 'menubar=no, status=no, scrollbars=no, menubar=no, width=1, height=1');
			setTimeout(() => {
				if (win) {
					win.close();
				}
			}, ms || 3000);
		});
	};

	personSyncAction = (request: TamperRequest) => {
		const checkKey = `${request.routeName}_personSyncAction`;
		const anchor = '.widget.personFields.fieldsView:visible';

		this.checkFor(
			checkKey,
			() => {
				return $(anchor).length !== 0;
			},
			(elementMarker: ElementMarkerCallback): PresencePayloadInterface | null => {
				elementMarker($(anchor).eq(0)[0]);
				let syncUrl = 'https://backstage.santeacademie.com/customer/contact/connector-sync/pipedrive/__email__';
				syncUrl = syncUrl.replace(
					'__email__',
					$('[data-test=email-label]')
						.eq(0)
						.text()
						.trim()
						.replace(/(.+)\((.+)\)/, '$1')
				);

				$(anchor).prepend('<div class="columnTitle"><a href="javascript:void(0);" class="stealth-popup-opener" data-url="' + syncUrl + '">Synchroniser depuis Backstage</a></div>');

				return null;
			},
			500
		);
	};
}

export default BackstageTools;
