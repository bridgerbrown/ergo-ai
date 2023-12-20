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
   if (app.store.menu) {
          this.root.querySelector("#test").innerHTML = "";
          for (let category of app.store.menu) {
            const liCategory = document.createElement("li");
            liCategory.innerHTML = `
                  <h3>${category.name}</h3>
                  <ul class='category'>
                  </ul>`;
            this.root.querySelector("#test").appendChild(liCategory);

            category.products.map(product => {
                const item = document.createElement("product-item");
                item.dataset.product = JSON.stringify(product);
                liCategory.querySelector("ul").appendChild(item);
            });
          }  
        } else {
          this.root.querySelector("#test").innerHTML = `Loading...`;
        }
  }
}
customElements.define("home-page", HomePage);
