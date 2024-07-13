const body = document.querySelector("body");
const circle = document.querySelector(".circle");

const toggleDarkMode = () => {
  body.classList.toggle("dark-mode");
  circle.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
};

circle.addEventListener("click", toggleDarkMode);

if (localStorage.getItem("dark-mode") === "true") {
  toggleDarkMode();
}
