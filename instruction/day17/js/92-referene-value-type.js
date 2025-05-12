// Value Type

let num1 = 15;
let num2 = num1; // num1'in değerini aldı

console.log(num1, num2); // 15 15
num2 = 10;
console.log(num1, num2); // 15 10

// Reference Type
let person1 = {
  name: "John",
  age: 30,
};

let person2 = person1;

console.log(person1, person2); // {name: 'John', age: 30} {name: 'John', age: 30}

person2.age = 99;
console.log(person1, person2); // {name: 'John', age: 99} {name: 'John', age: 99}
