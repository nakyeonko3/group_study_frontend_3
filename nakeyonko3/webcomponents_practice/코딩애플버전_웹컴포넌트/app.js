class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this._count = 0;
    this.render();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<h1 word="${this.word}">Hello, world!</h1>`;
    this.classList.add("hello-world");

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "helloworld.css";
    this.appendChild(link);
  }

  static get observedAttributes() {
    return ["word"];
  }

  attributeChangedCallback() {
    this.render();
  }

  set count(value) {
    this.setAttribute("word", value);
  }
}

export default HelloWorld;
