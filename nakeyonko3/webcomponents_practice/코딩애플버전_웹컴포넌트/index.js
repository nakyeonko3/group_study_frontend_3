import HelloWorld from "./app.js";
customElements.define("custom-int", HelloWorld);
const app = document.querySelector("#root");
app.innerHTML = `<custom-int></custom-int>`;
