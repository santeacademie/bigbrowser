import TamperController from '../../TamperController';
import TamperRequest from '../../../core/router/TamperRequest';
import $ from 'jquery';

class ReachCounter extends TamperController {
	loaded = false;
	hashTryReachField = 'a9a1a17c4397010006c2aa550dca0cab13ed3419';

	run = (request: TamperRequest): void => {
		setTimeout(() => {
			this._launchTryReach();
		}, 3500);
	};

	_grabFieldKey = (): string | undefined => {
		let foundField: string | undefined = undefined;

		$('.gridHeader__cell').each((index: number, element: HTMLInputElement) => {
			if (foundField) {
				return;
			}

			if (
				$(element)
					.text()
					.trim()
					.match(/^tentative/i)
			) {
				const field = $(element).data().field;

				if (field.indexOf('.') < 0) {
					foundField = field;
				}
			}
		});

		return foundField;
	};

	_launchTryReach = (): void => {
		if (this.loaded === true) {
			return;
		}

		this.loaded = true;

		const $body: any = $('body');

		this.hashTryReachField = this._grabFieldKey() ?? this.hashTryReachField;

		$body.on('click', 'td.gridRow__cell:not(".gridRow__cell--editing") button', (event: JQuery.ClickEvent) => {
			const $this = $(event.target);
			this.hashTryReachField = this._grabFieldKey();

			if ($this.parents('td:eq(0)').data('field') == this.hashTryReachField) {
				setTimeout(() => {
					this._addButtonToPopover();
				}, 1000);
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
	};

	_addButtonToPopover = (): void => {
		const $item: any = $('.changeFieldValue.' + this.hashTryReachField + ' .item');
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
		const $select: any = $item.find('select[name="' + this.hashTryReachField + '"]');
		const index: any = $select.prop('selectedIndex');

		if (index > 1) {
			$select.prop('selectedIndex', index - 1);
		}

		$select.trigger('change');
	};

	_addOneTryReach = ($item: any): void => {
		const $select: any = $item.find('select[name="' + this.hashTryReachField + '"]');
		const index: any = $select.prop('selectedIndex');

		if (index < $select.find('option').length - 1) {
			$select.prop('selectedIndex', Math.min(index + 1));
		}

		$select.trigger('change');
	};
}

export default ReachCounter;
