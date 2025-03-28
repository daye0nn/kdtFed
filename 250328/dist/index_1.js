"use strict";
// let a: number | string | boolean;
Object.defineProperty(exports, "__esModule", { value: true });
// a = 1;
// a = "hello";
// a = true;
let arr = [1, "hello", true]; // Union타입
let intersection = {
    name: "",
    color: "",
    language: "",
};
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
let union4 = {
    name: "",
};
union4 = union3;
let variable;
