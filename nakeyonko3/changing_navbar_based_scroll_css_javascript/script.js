let lastScroppTop = 0;
const navbar = document.querySelector("#navbar");

const changeTextToIconWhenScroll = () => {
  const scrollTop = window.scrollY;
  // console.log(window.screenY);
  if (lastScroppTop < scrollTop) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  lastScroppTop = scrollTop;
};
window.addEventListener("scroll", changeTextToIconWhenScroll);
