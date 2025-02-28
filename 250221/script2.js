// 배열을 생성하는 방법
const season = [];
season[0] = "spring";
season[1] = "summer";

// console.log(season);

// 2) 배열을 생성하는 방법
const pets = ["dog", "cat", "mouse"];

// 3) 배열을 생성하는 방법
const fruits = new Array("사과", "복숭아", "포도");
// console.log(fruits);

// 배열의 아이템을 접근 후 값 변경!!
// pets[2] = "hamster";

// for문
const colors = ["red", "green", "blue", "white", "black"];
for (let i = 0; i < colors.lenghh; i++) {
  console.log(colors[i]);
}

// forEach문
// 콜백함수 내 인자값이 1~3개까지 입력
// 1개 : 배열 내 개별아이템
// 2개 : 개별아이템, 개별아이템의 인덱스
// 3개 : 개별아이템, 인덱스, 배열 그 자체

// const animals = ["lion", "bear", "bird"];

// animals.forEach((animal) => {
//   console.log(animal);
// });

// animals.forEach((animal, index) => {
//   console.log(`animals[${index}] : ${animal}`);
// });

// animals.forEach((animal, index, array) => {
//   console.log(`[${array}][${index}] : ${animal}`);
// });

// 배열이 가지고 있는 주요 메서드 함수 시리즈

// 1. concat() : 서로 다른 배열 혹은 유사배열을 하나의 배열로 합치고자 할때 사용할 수 있는 메서드 함수

const vegetable = ["양상추", "토마토", "피클"];
const meat = ["불고기"];

// const meatBurger = vegetable.concat(meat);
// console.log(meatBurger);

// 2. reverse() : 현재 배열 내 아이템 순서를 역순으로 배치하고자 할 때 사용할 수 있는 메서드 함수

const numbers = [6, 9, 3, 21, 18];
console.log(numbers);
console.log(numbers.reverse());

// 3. sort() : 배열 안에 있는 아이템들의 값을 정렬하고자 할 때 사용할 수 있는 메서드 함수
// 기본적으로 작은 값부터 큰 값으로 정렬하는 오름차순의 형태를 띄고 있다.
// a-z // 1-9

const week = ["sun", "mon", "tue"];
console.log(week.sort());

const values = [5, 20, 3, 11, 4, 15];
console.log(
  values.sort((a, b) => {
    // if (a > b) return 1;
    // if (a < b) return -1;
    // if (a === 0) return 0;
    return a - b; // 오름차순 정렬
    // return b -a // 내림차순 정렬
  })
);

// 4. pop(), push() : 배열 안에 맨 뒤쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드 함수
const animals = ["lion", "bear", "bird"];
console.log(animals);
animals.pop();
console.log(animals);
animals.push("tiger");
console.log(animals);

// 5. shift(), unshift() : 배열 안에 맨 앞쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드 함수
animals.shift();
console.log(animals);
animals.unshift("dog");
console.log(animals);

// 6. slice() : 배열 내 특정 위치에 있는 아이템 값을 추가하거나 제거하고자 할 때 사용가능한 메서드 함수
// splice(위치, 개수)

const subjects = ["html", "css", "js", "ts", "react"];
console.log(subjects.splice(2));

const test = subjects.splice(2, 2);
console.log(test);
console.log(subjects);
console.log(subjects.splice(2, 2));
