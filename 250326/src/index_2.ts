// ** enum타입 **
enum Role {
  ADMIN,
  USER,
  GUEST,
}

const user7 = {
  name: "A",
  role: Role.ADMIN,
};

const user8 = {
  name: "B",
  role: Role.GUEST,
};

const user9 = {
  name: "C",
  role: Role.USER,
};

console.log(user9, user7, user8);

//타입의 계층 구조
let test01: unknown;
let test02: number = 2;

test01 = test02; // 가능
// test02 = test01; // 불가

//// any : 다 가능해짐
let anyVar: any = 10; //any는 슈퍼타입(문자, 숫자 다 가능)
anyVar = "hello"; //문자 > 오류
anyVar.toUpperCase(); //문자니까 가능

anyVar = true; // boolean 가능
anyVar = {}; // 객체 가능
anyVar = [];

anyVar.pop();

// any는 up/down casting 모두 가능 > 치트키인 이유
let num = 10;

anyVar = num; // 일반적 상황에서 upcasting 가능
num = anyVar; // downcasting

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = {};

// num = unknownVar; //downcasting 비허용 -> any는 가능

// 타입 가드 : 조건부 허용 if
if (typeof unknownVar === "number") {
  num = unknownVar;
}

const func1 = (): void => {
  console.log("Hello");
  // return "Hello"; //반환값 string값 -> 동위 요소라서 서로 할당 불가
}; //함수 매개변수 뒷 공간에 :void 정의

let a: void; //void타입 생성
a = undefined; //undefined는 서브타입이니 upcasting 가능

// never
const func3 = (): never => {
  while (true) {
    console.log("Hello");
  }
};

const func4 = (): never => {
  throw new Error();
};
