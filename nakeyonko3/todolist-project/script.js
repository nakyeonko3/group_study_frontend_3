console.log("Hello, World!");
const form = document.querySelector(".form-input");
const form_input = form.querySelector("input");
const div_todos = document.querySelector(".todos");

form.addEventListener("submit", getSubmitForm);
div_todos.addEventListener("click", deleteTodos);

function getSubmitForm(e) {
  e.preventDefault();
  const new_todo = form_input.value;
  form_input.value = "";
  createTodos(new_todo);
}

const createTodos = (new_todo) => {
  const div = document.createElement("div");
  div.innerText = new_todo;

  const span = document.createElement("span");
  span.innerText = "✔️";
  span.classList.add("todo-item-check");
  div.appendChild(span);
  div.classList.add("todo-item");
  div_todos.appendChild(div);
};

function deleteTodvos(e) {
  console.log(this);
  console.log(e.target.classList.contains("todo-item"));
  if (e.target.classList.contains("todo-item")) {
    e.target.remove();
  }
  if (e.target.classList.contains("todo-item-check")) {
    e.target.parentElement.remove();
  }
}
