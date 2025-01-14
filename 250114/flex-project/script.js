//목표 : 사용자가 스크롤을 내렸을 때, header 배경컬러 // banner height를 변경 => 가상클래스 적용

//1. 사용자가 지금 스크롤을 내렸어
// > 스크롤은 브라우저가 가지고 있는 요소
// > 브라우저가 알려줘야 함

//2. header는 html안에서 header라는 태그를 사용하고 있는 요소야
//3. 사용자가 스크롤을 내렸으니까 빨리 active클래스를 적용시켜

/*scroll Event*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});
//브라우저가 가지고 있는 내장객체

//document.querySelector("#circle");
//문서 => 개발자가 직접 작성한 html문서
