const body = document.querySelector("body");
const circle = document.querySelector(".circle");
circle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  circle.classList.toggle("dark-mode");
});
