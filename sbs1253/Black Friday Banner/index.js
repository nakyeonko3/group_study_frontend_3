const move = document.querySelector('.main__black');
const windowInnerWidth = window.innerWidth;
window.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  if (e.clientX >= document.documentElement.clientWidth / 2) {
    move.style.width = x + 'px';
  }
});

// e.clientX 보는 화면 기준 x좌표
// const windowInnerWidth = window.innerWidth; 스크롤바 포함 넓이
// document.documentElement.clientWidth 스크롤바 및 보더 마진 제외 document.documentElement는 HTML
