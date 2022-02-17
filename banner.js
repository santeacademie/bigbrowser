const getPackageJson = require('./scripts/getPackageJson');

const {
	version,
	name,
	author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');


const banner = `
// ==UserScript==
// @name         ${name}
// @namespace    http://tampermonkey.net/
// @version      ${version}
// @author       ${author.replace(/ *<[^)]*> */g, " ")}
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/related?hl=fr
// @icon         https://assets.website-files.com/5fa997afa489c5171404c70c/60f7e0104650f1a66201de1d_favicon-32.png
// @include      http*://*
// ==/UserScript==
`;

module.exports = banner;