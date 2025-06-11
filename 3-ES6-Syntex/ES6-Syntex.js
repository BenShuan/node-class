// ES6 Syntax Examples

// 1. let & const (Block Scoped Variables)
let name = "Alice";
const PI = 3.14159;

// 2. Arrow Functions
const add = (a, b) => a + b;

// 3. Template Literals
const greeting = `Hello, ${name}!`;

// 4. Destructuring Assignment
const person = { firstName: "Bob", age: 25 };
const { firstName, age } = person;

// 5. Default Parameters
function multiply(a, b = 2) {
  return a * b;
}

// 6. Spread Operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// 7. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// 8. Classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// 9. Promises
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 1000);
  });

// 10. Import & Export (Modules)
// export const foo = 42;
// import { foo } from './module.js';

// 11. Enhanced Object Literals
const color = "blue";
const car = {
  color,
  drive() {
    console.log("Driving...");
  },
};

// 12. For...of Loop
for (const num of arr1) {
  console.log(num);
}

// 13. Map and Set
const mySet = new Set([1, 2, 3,2,3,2,4,4]);
console.log('mySet', mySet)

const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16]

// 14. Array.prototype.filter
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 15. Array.prototype.find
const firstLarge = numbers.find(n => n > 2);
console.log(firstLarge); // 3

// 16. Array.prototype.findIndex
const indexOfThree = numbers.findIndex(n => n === 3);
console.log(indexOfThree); // 2

// 17. Array.prototype.every
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// 18. Array.prototype.some
const hasNegative = numbers.some(n => n < 0);
console.log(hasNegative); // false

// 19. Array.prototype.includes
console.log(numbers.includes(2)); // true

// 20. Array.prototype.reduceRight
const sumRight = numbers.reduceRight((acc, n) => acc + n, 0);
console.log(sumRight); // 10

// 21. Array.prototype.flat
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

// 22. Array.prototype.flatMap
const flatMapped = numbers.flatMap(n => [n, n * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8]