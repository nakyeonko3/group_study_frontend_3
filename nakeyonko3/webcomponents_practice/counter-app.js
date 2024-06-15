// counter-app.js
class CounterApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._count = 0; // 초기 카운트 값
  }

  static get observedAttributes() {
    return ["count"]; // 관찰할 어트리뷰트 이름
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "count") {
      this._count = parseInt(newValue);
      this.render();
    }
  }

  render() {
    const shadowRoot = this.shadowRoot;
    shadowRoot.innerHTML = `
      <button id="decrement">-</button>
      <span id="count">${this._count}</span>
      <button id="increment">+</button>
    `;

    const decrementBtn = shadowRoot.getElementById("decrement");
    const incrementBtn = shadowRoot.getElementById("increment");

    decrementBtn.addEventListener("click", () => {
      this.setCount(this._count - 1);
    });

    incrementBtn.addEventListener("click", () => {
      this.setCount(this._count + 1);
    });
  }

  setCount(newCount) {
    this.setAttribute("count", newCount);
  }
}
export default CounterApp;
customElements.define("counter-app", CounterApp);
