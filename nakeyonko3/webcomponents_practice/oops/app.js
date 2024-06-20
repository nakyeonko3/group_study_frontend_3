class HelloWorld extends HTMLElement {
  constructor() {
    super();
    const word = this.getAttribute("word");
    const color = this.getAttribute("color");
    this.attachShadow({ mode: "open" });
    this.state = {};
    this.render();
  }

  // Lifecycle, called when the element is added to the DOM
  connectedCallback() {
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", (event) => {
        alert(this.getAttribute("alert"));
      });
  }

  setState(newState) {
    this.state = newState;
    render();
  }

  render(state, props) {
    // shadow DOM, encapsulates the style and the markup
    this.shadowRoot.innerHTML = `<style> h1 {color: ${this.color};}
    ::slotted(h1) {color: green; }</style>
    <h1>${this.word}</h1>
    <slot></slot>
    <button>Click me</button>`;

    afterRender();
  }

  afterRender() {}

  // Lifecycle, called when the element is removed from the DOM
  // disconnectedCallback() {
  //   alert("Im Removed");
  // }
}

customElements.define("hello-world", HelloWorld);

document.querySelector("#target").remove();
