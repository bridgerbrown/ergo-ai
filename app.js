import Router from "./services/Router.js";
import Store from "./services/Store.js";
import API from "./services/API.js";
import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage.js";
import UserPage from "./components/UserPage.js";

window.app = {};

const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = () => this.addEventListener.call(this, arguments);
HTMLElement.prototype.off = () => this.removeEventListener.call(this, arguments);
HTMLElement.prototype.$ = () => this.querySelector.call(this, arguments);
HTMLElement.prototype.$ = () => this.querySelectorAll.call(this, arguments);

app.router = Router;
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
});

