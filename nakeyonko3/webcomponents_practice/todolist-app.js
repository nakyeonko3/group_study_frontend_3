// counter-app.js
class ToDoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._count = 0; // 초기 카운트 값
  }

  static get observedAttributes() {
    return ["todo"]; // 관찰할 어트리뷰트 이름
  }

  connectedCallback() {
    this.render();
  }

  // attributeChangedCallback(name, oldValue, newValue) {
  //   if (name === "count") {
  //     this._count = parseInt(newValue);
  //     this.render();
  //   }
  // }

  render() {
    this.shadowRoot.innerHTML = `
      <form id="todo-form">
        <input type="text" id="todo-input" placeholder="할 일을 입력하세요" />
        <button type="submit">추가</button>
      </form>
      <div>
        <ul id="todo-list">
          <li>할 일 1</li>
        </ul>
      <div/>
    `;
    this.setDOMEvent();
    // decrementBtn.addEventListener("click", () => {
    //   this.setCount(this._count - 1);
    // });

    // incrementBtn.addEventListener("click", () => {
    //   this.setCount(this._count + 1);
    // });
  }

  setDOMEvent() {
    const todoForm = this.shadowRoot.getElementById("todo-form");
    const todoInput = this.shadowRoot.getElementById("todo-input");
    const todoList = this.shadowRoot.getElementById("todo-list");

    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(todoInput.value);
      todoInput.value = "";

      const li = document.createElement("li");
      todoList.appendChild(li);
    });
  }

  // setCount(newCount) {
  //   this.setAttribute("count", newCount);
  // }
}
export default ToDoList;
customElements.define("todolist-app", ToDoList);
