const btn = document.querySelector(".btn");
const loginId = document.querySelector(".userID");
const password = document.querySelector(".userPW");

const infoList = {
  sumin: "1234",
  mango: "6789",
  apple: "000000",
};

function login() {
  let a = loginId.value;
  if (infoList[a] != undefined && infoList[a] != null) {
    if (infoList[a] === password.value) {
      alert(`환영합니다. ${loginId.value}님!`);
      // window.open("./todo/todoPage.html")
    } else {
      alert("비밀번호를 확인해주세요.");
    }
  } else {
    alert("아이디가 존재하지 않습니다.");
  }
}

btn.addEventListener("click", () => login());
