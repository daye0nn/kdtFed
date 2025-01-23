// //code라는 이름의 함수 선언식
// function code() {
//   console.log("오늘은 목요일입니다");
// }
// //함수 호출
// code();

// const obj = {
//   title: "자바스크립트",
//   fnc: function () {
//     console.log("자바스크립트 짱");
//   },
// };

// obj.fnc();
//메서드(=방법) 함수

// const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요"));

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
var num = 5;

console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다`);

// calcSum(10);
// console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}`);

//매개변수 => 함수의 선언부
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }

// sum(10, 20);

// "반환" return문

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(2, 4));

//Scope = 범위
//전역 스코프 = global scope

/* 전역 스코프 사용 사례 1 
var hi = "hello";

function greeting() {
  console.log(hi);
}

greeting();
*/

/* 전역 스코프 사용 사례 2 
var hi = "hello";

function greeting() {
  hi = "bye";
}

greeting();
*/

/* 전역 스코프 사용 사례 3 */
// function greeting() {
//   hi = "hello";
// }
// greeting();
// console.log(hi);

// var 사용하거나 혹은 어떤 키워드도 존재하지 않는 경우 전역에서 사용 가능한 변수가 된다 => 함수 내부에서도 사용가능!

/* 블록 스코프 */
// const factor = 5;

// function calc() {
//   return num * factor;
// }

// {
//   const num = 10;
//   let result = calc();
//   console.log(`result : ${result}`);
// }
