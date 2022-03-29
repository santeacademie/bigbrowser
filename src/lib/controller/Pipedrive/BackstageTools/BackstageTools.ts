import $ from 'jquery';

import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';

class BackstageTools extends TamperController {
	run = (request: TamperRequest): void => {
		this.stealthPopupListener();
		this.personSyncAction();
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

	personSyncAction = () => {
		const anchor = '.widget.personFields.fieldsView';

		this.waitFor(() => {
			return $(anchor).length !== 0;
		}, 100).then(() => {
			let syncUrl = 'https://backstage.santeacademie.com/customer/contact/connector-sync/pipedrive/__email__';
			syncUrl = syncUrl.replace('__email__', $('[data-test=email-label]').text().trim());
			$(anchor).prepend(
				'<div class="columnTitle"><a href="javascript:void(0);" class="stealth-popup-opener" data-url="' +
					syncUrl +
					'">Synchroniser avec Backstage</a></div>'
			);
		});
	};
}

export default BackstageTools;
