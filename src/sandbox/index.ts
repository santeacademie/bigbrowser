import App from "../lib";

// Html section
const title = 'BigBrowser - Sandbox';
document.title = title
const body = document.querySelector("body");

if (body) {
	body.innerHTML = `<h1>${title}</h1>`;
}

App;
