import API from '../services/API.js';
import loadCSS from "../hooks/loadCSS.js";

export default class HomePage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");
    this.root.appendChild(content);
    this.root.appendChild(styles);

    loadCSS("HomePage");
  }

  connectedCallback() {
    this.render();
    window.addEventListener("appmenuchange", () => {
      this.render();
    });
  }

  render() {
    this.root.querySelector("#test").innerHTML = `Loading...`;
  }
}
customElements.define("home-page", HomePage);
