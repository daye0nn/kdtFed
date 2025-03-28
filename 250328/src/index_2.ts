type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person; // 타입단언
person.name = "";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

// type DogNew = {
//   name: string;
//   color: string;
//   breed: string;
// };

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; // 타입단언

// let dogAI: DogNew = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// };

// 초과 프로퍼티 검사를 우회해서 넘어간 케이스
// 슈퍼타입 & 서브타입
// upcasting & downcasting
// let DogNew: Dog = dogAI;

let num1 = 10 as never;
let num2 = 10 as unknown;

num2 = "hello";

// let num3 = 10 as string;

// 다중단언
let num3 = 10 as unknown as string;
// const 단언
let num4 = 10 as const;

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
};

const len: number = post.author!.length;
