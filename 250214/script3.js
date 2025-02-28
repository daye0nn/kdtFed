// 사용자에게 지름 & 높이의 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요
// 원기둥의 부피 : 밑면적 x 높이
// 밑면적 : Math.PI * R * R

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록 생성자 함수를 활용해서 코드를 구현!
const radius = parseInt(document.querySelector("#cyl-diameter"));
const height = parseInt(document.querySelector("#cyl-height"));

const button = document.querySelector('input[type="button"]');
const result = document.querySelector("#result");

// function Cylinder(cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter;
//   this.height = cylinderHeight;
//   this.getVolume = function () {
//     const radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이값을 입력하세요!";
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
  }
});
