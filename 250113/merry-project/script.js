// 지금 내가 제어하고자 하는 내용이 무엇인지부터 작성
//8개의 face를 대상으로 모션 제어

//컴퓨터에게 무엇이 8개의 face인지 알려주기

//해당 모션 : 각각의 face에 마우스를 올리면 회전이 멈춤
//해당 모션 : 각각의 face에서 마우스가 떠나가면 회전이 정상적으로 진행

const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
