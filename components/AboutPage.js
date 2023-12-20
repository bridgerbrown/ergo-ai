import loadCSS from "../hooks/loadCSS.js";

export default class AboutPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);
    const section = document.createElement("section");
    this.root.appendChild(section);

    loadCSS("AboutPage");
  }

  connectedCallback() {
    window.addEventListener("appcartchange", () => {
      this.render();
    })
    this.render();
  }
  
  render() {
    let section = this.root.querySelector("section");
    let html = `
      <h2>Hello</h2>
    `;
    section.innerHTML = html;

    const template = document.getElementById("about-page-template");
    const content = template.content.cloneNode(true);
    section.appendChild(content);
    this.root.querySelector("section").innerHTML += `
      <h2>test about</h2>
    `
  }
}
customElements.define("about-page", AboutPage);
