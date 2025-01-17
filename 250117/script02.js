let a = 10;
let b = a;

let obj1 = {
  c: 10,
  d: "ddd",
};

let obj2 = obj1;

b = 15;
obj2.c = 20;

console.log(a, b);
console.log(obj1, obj2);

let user = {
  name: "David",
  gender: "male",
};

function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}
const user2 = copyObject(user);
user2.name = "Jane";

console.log(user.name, user2.name);

// Spread Operator = 전개연산자 구문

const fruits = ["apple", "banana", "cherry"];
const favorit = [...fruits];
//깊은복사
console.log(fruits, favorit);
favorit[1] = "grape";
console.log(fruits, favorit);
