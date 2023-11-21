import loadCSS from "../hooks/loadCSS";

export default class AboutPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("about-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    loadCSS("AboutPage");
  }
}
customElements.define("about-page", AboutPage);
