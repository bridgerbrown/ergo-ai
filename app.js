import Router from "./services/Router";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import UserPage from "./components/UserPage";

window.app = {};

const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = () => this.addEventListener.call(this, arguments);
HTMLElement.prototype.off = () => this.removeEventListener.call(this, arguments);
HTMLElement.prototype.$ = () => this.querySelector.call(this, arguments);
HTMLElement.prototype.$ = () => this.querySelectorAll.call(this, arguments);

app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
  loadData();
});

