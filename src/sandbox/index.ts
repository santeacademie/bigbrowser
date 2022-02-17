import App from "../lib";

// Html section
const title = 'BigBrowser - Sandbox';
document.title = title
document.querySelector("body").innerHTML = `<h1>${title}</h1>`;

// App section
const app = new App();
app.init();