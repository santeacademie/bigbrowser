import $ from 'jquery';

import TamperController from 'core/controller/TamperController';
import TamperRequest from 'core/router/TamperRequest';

class ReachCounter extends TamperController {
	loaded = false;
	buttonAdded = false;
	focusedFieldKey: string | undefined = undefined;

	run = (request: TamperRequest): void => {
		setTimeout(() => {
			this._launchTryReach();
		}, 3500);
	};

	_grabFieldKey = (regexField: RegExp, searchFieldKey: string): string | undefined => {
		let foundField: string | undefined = undefined;

		$('.gridHeader__cell').each((index: number, element: HTMLElement) => {
			if (foundField) {
				return;
			}

			if ($(element).text().trim().match(regexField)) {
				const field = $(element).data().field;
				const fieldKey = field.split('.')[0];

				if (fieldKey == searchFieldKey) {
					foundField = fieldKey;
				}
			}
		});

		return foundField;
	};

	_launchTryReach = (): void => {
		if (this.loaded === true) {
			return;
		}

		const $body: any = $('body');

		$body.on('click', 'td.gridRow__cell:not(".gridRow__cell--editing") button', (event: JQuery.ClickEvent) => {
			const $this = $(event.target);
			this.focusedFieldKey = this._grabFieldKey(/^tentative/i, $this.parents('td:eq(0)').data('field'));

			if (this.focusedFieldKey) {
				setTimeout(
					() => {
						this._addButtonToPopover();
						this.buttonAdded = true;
					},
					this.buttonAdded ? 100 : 1000
				);
			}
		});
		$body.on('click', '.sub-one-tryreach', (event: JQuery.ClickEvent) => {
			const $this = $(event.target);

			this._subOneTryReach($this.closest('.item'));
		});
		$body.on('click', '.add-one-tryreach', (event: JQuery.ClickEvent) => {
			const $this = $(event.target);

			this._addOneTryReach($this.closest('.item'));
		});

		this.loaded = true;
	};

	_addButtonToPopover = (): void => {
		const $item: any = $('.changeFieldValue.' + this.focusedFieldKey + ' .item');
		$item.find('.valueWrap').prepend(`
		        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
		            <button style="padding:5px 10px;cursor: pointer;" class="sub-one-tryreach">-1</button>
		            <button style="padding:5px 10px;cursor: pointer;" class="add-one-tryreach">+1</button>
		        </div>
		    `);
		$item.find('.select2-container').hide();
		$item.find('select').removeClass('select2-offscreen');
	};

	_subOneTryReach = ($item: any): void => {
		const $select: any = $item.find('select[name="' + this.focusedFieldKey + '"]');
		const index: any = $select.prop('selectedIndex');

		if (index > 1) {
			$select.prop('selectedIndex', index - 1);
		}

		$select.trigger('change');
	};

	_addOneTryReach = ($item: any): void => {
		const $select: any = $item.find('select[name="' + this.focusedFieldKey + '"]');
		const index: any = $select.prop('selectedIndex');

		if (index < $select.find('option').length - 1) {
			$select.prop('selectedIndex', Math.min(index + 1));
		}

		$select.trigger('change');
	};
}

export default ReachCounter;
