import Router from "./services/Router.js";
import HomePage from "./components/HomePage.js";
import AboutPage from "./components/AboutPage.js";
import UserPage from "./components/UserPage.js";

window.app = {};

const $ = function(args) { return document.querySelector(args) };
const $$ = function(args) { return document.querySelectorAll(args) };
HTMLElement.prototype.on = function(a, b, c) { return this.addEventListener(a, b, c) };
HTMLElement.prototype.off = function(a, b) { return this.removeEventListener(a, b) };
HTMLElement.prototype.$ = function(s) { return this.querySelector(s) };
HTMLElement.prototype.$ = function(s) { return this.querySelectorAll(s) };

app.router = Router;
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
});

