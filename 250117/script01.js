// 변수 안에 담ㅇ뭇 이ㅜ ㅣ잇는 값 => 자료형

//원시타입 = primitivetype'
// number 숫자
//string 문자열
//boolean 논리형
// > Template Literal = 변수와 문자열을 동시에 사용하고자 할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어놓은 문법
//undefined 미정
// > falsy한 값
//undefined 미정
//null "유효하지 않다" 값
// > 아예 값을 주지 않은 것을 정의하고자 할 때
//symbol 유일무이한 값

//참조타입 = referenfe
// array 배열
//function 함수
//object 객체
//regexp 정규표현식
//Map 맵데이터
// set 셋데이터

const num = 7;
const str = "7";
const bool = true;
const bool02 = false;

// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age);

console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTitle = "하얼빈";
// const result = userName + "배우가 출연한 최근 영화는 " + movieTitle + "입니다";
const result = `${userName} 배우가 출연한 최근 영화는 ${movieTitle}입니다.`;

console.log(result);

let hobby;

console.log(hobby);

let weekend = null;
console.log(weekend);

const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();
const member365 = {
  name: "Jack",
  [id]: "ezen",
};

console.log(member365);

let arr = [1, 2, 3];
const strArr = ["park", "kim", "lee"];
const boolArr = [true, false];

console.log(arr);
console.log(typeof arr);
console.log(`${arr[2]}은 arr배열의 ${arr.length}번째 값입니다.`);

arr[3] = 7;

console.log(arr);

const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};

//객체의 형태는
// (key: value) => 한쌍의 property = 속성
// html을 사용할 때 => a href => attribute

//온점표기법
console.log(frontendClass);
//대괄호표기법
console.log(frontendClass["students"]);

frontendClass.attitude = "the best";
console.log(frontendClass);

//함수 선언
function hello() {
  console.log("Hello World!");
}
//함수 호출
console.log(typeof hello);
