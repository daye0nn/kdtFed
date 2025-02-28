// 반복문 & 배열
// 문자열 => 정규표현식 => 배열
// 문자열 => 유사배열
// length & index

// 문자열을 ㅂ
const str = "Hello, everyone";
// 1) 문자열을 배열로 변환하는 방법
console.log(str.split(""));
// 2) 전개연산자구문 활용
console.log([...str]);

// 유사배열
console.log(Array.from(str));
