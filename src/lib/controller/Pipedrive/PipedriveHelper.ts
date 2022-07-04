import $ from 'jquery';

class PipedriveHelper {
	static getCustomFieldValueElementByName = (label: string): JQuery => {
		return $('[data-test=field-label]:visible')
			.filter(function () {
				return $(this).text().trim() == label;
			})
			.eq(0)
			.parents('.editable')
			.find('.value');
	};

	static getBadgeValueView = (id: string, value: any): string => {
		return `
			<div id="${id}" style="font-weight:bold;color: white; max-height: 16px; display: flex; margin-top:3px; margin-bottom: 8px; max-width: max-content; flex-direction: row; justify-content: center; align-items: end; text-align: center; border-radius: 20px; font-size: 12px; padding: 2px 15px;background: rgb(141,71,222);background: linear-gradient(196deg, rgba(141,71,222,1) 0%, rgba(111,101,255,1) 100%);">
				${value}
			</div>
		`.trim();
	};

	static editCustomFieldValueElementByName = (label: string, editCallback: (input: JQuery) => void): void => {
		let $itemContainer: JQuery = $(`[data-field-key=${label}] .item`);

		if ($itemContainer.length === 0) {
			$itemContainer = PipedriveHelper.getCustomFieldValueElementByName(label).parents('.item');
		}

		$itemContainer.find('.edit').click();
		editCallback($itemContainer.find('.input').find('input,select,textarea'));
		$itemContainer.find('.save *').click();
	};
}

export default PipedriveHelper;
