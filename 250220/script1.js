// regExp = regular Expression = 정규표현식
// 문자열 + 정규표현식 + 배열

// 1. 패턴 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의하는 것
// 2. 플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때, 추가적인 옵션을 적용할 수 있음
// 3. 클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 때, 사용할 수 있는 요소

// 정규표현식 정의
// 숫자 3개로 구성되어진 하나의 패턴을 (regexp에 담음)만들고 싶다! > 숫자 : decimal
// const regexp = /\d{3}/;

// // 정규표현식 : 객체 > 매서드함수나 속성 사용 가능
// // console.log(typeof regexp);

// // test 일치하면 True
// // regexp.test("Hello");
// // // 기본 베이스 : 문자열에서 어떤 패턴을 가진 값을 찾아주는 것 "123" ok
// // regexp.test("123");

// 방법 2.
// const regexp = new RegExp(/\d{3}/);
// // false / true

// // 방법 1.
// console.log(regexp.test("hello world"));
// // False
// console.log(regexp.test("123"));
// // true

// // 내장객체 > class 혹은 생성자함수로 만들어짐
// // new라는 예약어
// // 정규표현식 = 내장객체 > new예약어로 생성 가능

// ///
// // 빈칸도 문자열
// let str = "ES2025 is powerful";
// // pattern = 객체
// const pattern = /ES2025/;

// console.log(str.match(/ES6/));
// console.log(str.match(pattern));
// console.log(str.replace(pattern, "love"));
// love is powerful

//// 플래그
// const str = "Love is Powerful";
// const pattern = /love/i;

// //test : boolean값 반환
// console.log(pattern.test(str));
// false : l대소 문자 구분 x
// i넣으니 true

////정규표현식의 주요 클래스
// const str = "Love is Power777";
// // 방법 1
// const pattern = /Power\d{3}/;
// // 방법 2
// // const pattern = /Power\d\d\d/;

// console.log(str.match(pattern));

//// 정규표현식의 특수문자*
// const hello = "hello, everyone";

// const pattern = /H/i;
// const pattern = /^H/i;

// false : email의 경우 .com으로 끝나야 하니까
// const pattern = /com$/i;

// console.log(pattern.test(hello));
// true

// eh로 되도 true

// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

const number = /^[0-9]+$/;
const positive = /^[1-9]\d+$/;
const negative = /^\-[1-9]\d*$/;

const engword = /^[a-zA-Z]+$/;
const engandword = /^[a-zA-Z0-9]+$/;
const korean = /^[가.힣]+$/;
const koreanandenglish = /^[가.힣a-zA-Z]+$/;

// 정규 표현식을 직접 만드는 경우는 거의 없다.
