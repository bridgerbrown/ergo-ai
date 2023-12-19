import loadCSS from "../hooks/loadCSS";

export default class HomePage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);
    const template = document.getElementById("home-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    loadCSS("HomePage");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (app.home.test) {
      this.root.querySelector("#home").innerHTML = "";
      const container = document.createElement("div");
      container.innerHTML = `
        <h2>Test</h2>
      `;
      this.root.querySelector("#home").appendChild(container);
    } else {
      this.root.querySelector("#home").innerHTML = `Loading...`;
    }
  }
}
customElements.define("home-page", HomePage);
