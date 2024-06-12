// app.js
import CounterApp from "./counter-app.js";
import ToDoList from "./todolist-app.js";

// CounterApp 컴포넌트 인스턴스 생성
const counterApp = new CounterApp();

const todolist = new ToDoList();

// 특정 위치에 CounterApp 컴포넌트 렌더링
const container = document.getElementById("container");

container.appendChild(counterApp);
container.appendChild(todolist);
