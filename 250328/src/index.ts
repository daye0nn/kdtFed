interface Person {
  readonly name: string;
  age?: number;
  sayHi?: () => void;
}

let person1: Person = {
  name: "David",
  sayHi: () => {},
};

let person2: Person = {
  name: "David",
  age: 20,
};
