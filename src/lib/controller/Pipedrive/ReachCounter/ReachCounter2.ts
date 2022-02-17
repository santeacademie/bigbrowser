import TamperController from '../../TamperController';
import TamperRequest from '../../../core/router/TamperRequest';

class ReachCounter2 extends TamperController {
	run = (request: TamperRequest): void => {
		const script = document.createElement('script');
		script.setAttribute('src', 'https://code.jquery.com/jquery.js');
		document.getElementsByTagName('body')[0].appendChild(script);
		void script;

		let launched = false;

		setTimeout(function () {
			launchTryReach();
		}, 500);

		const hashTryReachField = 'a9a1a17c4397010006c2aa550dca0cab13ed3419';
		const jQuery: any = null;

		function launchTryReach() {
			if (launched === true) {
				return;
			}

			launched = true;

			const $body: any = jQuery('body');

			$body.on('click', 'td[data-field="' + hashTryReachField + '"].gridRow__cell:not(".gridRow__cell--editing") button', function () {
				setTimeout(function () {
					addButtonToPopover();
				}, 200);
			});
			$body.on('click', '.sub-one-tryreach', function () {
				subOneTryReach(jQuery(this).closest('.item'));
			});
			$body.on('click', '.add-one-tryreach', function () {
				addOneTryReach(jQuery(this).closest('.item'));
			});
		}

		function addButtonToPopover() {
			const $item: any = jQuery('.changeFieldValue.' + hashTryReachField + ' .item');
			$item.find('.valueWrap').prepend(`
		        <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
		            <button style="padding:5px 10px;cursor: pointer;" class="sub-one-tryreach">-1</button>
		            <button style="padding:5px 10px;cursor: pointer;" class="add-one-tryreach">+1</button>
		        </div>
		    `);
			$item.find('.select2-container').hide();
			$item.find('select').removeClass('select2-offscreen');
		}

		function subOneTryReach($item: any) {
			const $select: any = $item.find('select[name="' + hashTryReachField + '"]');
			const index: any = $select.prop('selectedIndex');

			if (index > 1) {
				$select.prop('selectedIndex', index - 1);
			}

			$select.trigger('change');
		}

		function addOneTryReach($item: any) {
			const $select: any = $item.find('select[name="' + hashTryReachField + '"]');
			const index: any = $select.prop('selectedIndex');

			if (index < $select.find('option').length - 1) {
				$select.prop('selectedIndex', Math.min(index + 1));
			}

			$select.trigger('change');
		}
	};
}

export default ReachCounter2;
