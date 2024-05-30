const form = document.querySelector(".form-input");
const form_input = form.querySelector("input");
const div_todos = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const new_todo = form_input.value;
  form_input.value = "";
  addTodoList(new_todo);
});

function addTodoList(new_todo) {
  const div = document.createElement("div");
  div.innerText = new_todo;

  div.id = Math.floor(Math.random() * 10000);
  const span = document.createElement("span");
  span.innerText = "✔️";
  span.classList.add("todo-item-check");
  div.appendChild(span);
  div.classList.add("todo-item");
  div_todos.appendChild(div);
}

div_todos.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("todo-item"));
  if (e.target.classList.contains("todo-item")) {
    e.target.remove();
  }
  if (e.target.classList.contains("todo-item-check")) {
    e.target.parentElement.remove();
  }
});
