"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = {}; // 타입단언
person.name = "";
person.age = 20;
// type DogNew = {
//   name: string;
//   color: string;
//   breed: string;
// };
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
}; // 타입단언
// let dogAI: DogNew = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// };
// 초과 프로퍼티 검사를 우회해서 넘어간 케이스
// 슈퍼타입 & 서브타입
// upcasting & downcasting
// let DogNew: Dog = dogAI;
let num1 = 10;
let num2 = 10;
num2 = "hello";
// let num3 = 10 as string;
// 다중단언
let num3 = 10;
// const 단언
let num4 = 10;
let post = {
    title: "게시글",
};
const len = post.author.length;
