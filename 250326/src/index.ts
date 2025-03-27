let num1: number = 10; // number
let num2: 10 = 10; // literal

// num1 = supertype
// num2 = subtype

// supertype > subtype : upcasting
// subtype > supertype : downcasting => anytype

// num1 = num2;
// num2 = num1;

let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = undefined;

let unknownVar: unknown;

// let num: number = unknownVar;
// let str: string = unknownVar;

// let test01: never = 10;
// let test02: never = "string";
// let test03: never = true;

// interface IAnimal {
//   // name: string;
//   // color: string;
//   [key: string]: string;
// }

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

let cat = {
  color: "white",
  country: "일본",
  name: "야옹이",
};

animal = dog;
animal = cat;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: "ts",
  price: 30000,
  // skill: "react", // 객체의 초과 프로퍼티 검사: 오류
};

let programmingBook: ProgrammingBook = {
  name: "typescript",
  price: 30000,
  skill: "reactjs",
};

book = programmingBook;

let book3: Book = programmingBook;

const func = (book: Book) => {};
func(programmingBook);
