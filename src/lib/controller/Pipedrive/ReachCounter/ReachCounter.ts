import TamperController from '../../TamperController';
import TamperRequest from '../../../core/router/TamperRequest';

const jQuery: any = null;

class ReachCounter extends TamperController {
	loaded = false;
	hashTryReachField = 'a9a1a17c4397010006c2aa550dca0cab13ed3419';

	run = (request: TamperRequest): void => {
		this._injectScript();

		setTimeout(() => {
			this.launchTryReach();
		}, 500);
	};

	_injectScript = (): void => {
		const script = document.createElement('script');
		script.setAttribute('src', 'https://code.jquery.com/jquery.js');
		document.getElementsByTagName('body')[0].appendChild(script);
		void script;
	};

	launchTryReach = (): void => {
		if (this.loaded === true) {
			return;
		}

		this.loaded = true;

		const $body: any = jQuery('body');

		$body.on('click', 'td[data-field="' + this.hashTryReachField + '"].gridRow__cell:not(".gridRow__cell--editing") button', () => {
			setTimeout(() => {
				this.addButtonToPopover();
			}, 200);
		});
		$body.on('click', '.sub-one-tryreach', () => {
			this.subOneTryReach(jQuery(this).closest('.item'));
		});
		$body.on('click', '.add-one-tryreach', () => {
			this.addOneTryReach(jQuery(this).closest('.item'));
		});
	};

	addButtonToPopover = (): void => {
		const $item: any = jQuery('.changeFieldValue.' + this.hashTryReachField + ' .item');
		$item.find('.valueWrap').prepend(`
		        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
		            <button style="padding:5px 10px;cursor: pointer;" class="sub-one-tryreach">-1</button>
		            <button style="padding:5px 10px;cursor: pointer;" class="add-one-tryreach">+1</button>
		        </div>
		    `);
		$item.find('.select2-container').hide();
		$item.find('select').removeClass('select2-offscreen');
	};

	subOneTryReach = ($item: any): void => {
		const $select: any = $item.find('select[name="' + this.hashTryReachField + '"]');
		const index: any = $select.prop('selectedIndex');

		if (index > 1) {
			$select.prop('selectedIndex', index - 1);
		}

		$select.trigger('change');
	};

	addOneTryReach = ($item: any): void => {
		const $select: any = $item.find('select[name="' + this.hashTryReachField + '"]');
		const index: any = $select.prop('selectedIndex');

		if (index < $select.find('option').length - 1) {
			$select.prop('selectedIndex', Math.min(index + 1));
		}

		$select.trigger('change');
	};
}

export default ReachCounter;
