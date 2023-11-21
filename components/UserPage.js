import loadCSS from "../hooks/loadCSS";

export default class UserPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("user-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    loadCSS("UserPage")
  }
}
customElements.define("user-page", UserPage);
