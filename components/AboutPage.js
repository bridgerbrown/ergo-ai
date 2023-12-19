import loadCSS from "../hooks/loadCSS";

export default class AboutPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("about-page-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");
    this.appendChild(content);
    this.root.appendChild(styles);

    loadCSS("AboutPage");
  }

  connectedCallback() {
    this.render();
  }
  
  render() {
    let section = this.root.querySelector("section");
    let html = `
      <h2>Hello</h2>
    `;
    const template = document.getElementById("about-page-template");
    const content = template.content.cloneNode(true);
    section.appendChild(content);
    section.innerHTML = html;
    this.root.querySelector("#about").innerHTML = `Test...`;
  }
}
customElements.define("about-page", AboutPage);
