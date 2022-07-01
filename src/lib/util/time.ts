export const secondsToHHMMSS = function (_opts) {
	const opts = {
		seconds: 0,
		hideHourIfZero: true,
		hideMinuteIfZero: true,
		hideSecondIfZero: true,
		minuteToSecondsSeparator: ':',
		hourToMinuteSeparator: ':',
		secondToVoidSeparator: '',
		leadingZeroHour: true,
		leadingZeroMinute: true,
		leadingZeroSeconds: true,
		noLeadingZeroMinuteIfHeader: true,
		noLeadingZeroSecondIfHeader: true,
		hideSecond: false,
		hideSecondIfMinute: false,
	};

	const keys = Object.keys(_opts);

	for (let i = 0; i < keys.length; i++) {
		opts[keys[i]] = _opts[keys[i]];
	}

	const sec = opts.seconds;
	const hrs = Math.floor(sec / 3600);
	const min = Math.floor((sec - hrs * 3600) / 60);

	let seconds = sec - hrs * 3600 - min * 60;
	seconds = Math.round(seconds * 100) / 100;

	let result = opts.hideHourIfZero && hrs == 0 ? '' : (opts.leadingZeroHour && hrs < 10 ? '0' + hrs : hrs) + opts.hourToMinuteSeparator;
	result += hrs == 0 && opts.hideMinuteIfZero && min == 0 ? '' : (opts.leadingZeroMinute && min < 10 && !(hrs == 0 && opts.noLeadingZeroMinuteIfHeader) ? '0' + min : min) + opts.minuteToSecondsSeparator;
	result +=
		(opts.hideSecondIfMinute && min !== 0) || opts.hideSecond || (hrs == 0 && min == 0 && opts.hideSecondIfZero && seconds == 0) ? '' : (opts.leadingZeroSeconds && seconds < 10 && !(hrs == 0 && min == 0 && opts.noLeadingZeroSecondIfHeader) ? '0' + seconds : seconds) + opts.secondToVoidSeparator;

	return result;
};
