//How to declare a variable
// `var`, `let`, `const`

let firstName = 'Rod';
const lastName = 'Azur';
const age = 30;

console.log(firstName);
console.log(lastName);
console.log(age);

//Naming Conventions
// Only letter, numbers, underscores and dollar signs
// Cannot start with a number

//Multi-Word Formatting
// firstName - camelCase
// first_name - underscore
// FirstName - PascalCase
// firstname - lowercase

//We can re-assign `let` variables. If you change `age` to use `const`, reassign it, you will get an error
firstName = 'Ryan';
console.log(firstName);
// age = 19;
// console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

//We cannot re-assign a const variable
const x = 100;
// x = 200;

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
console.log(arr);
arr.push(5);
console.log(arr);

const person = {
  name: 'Ryan',
};
console.log(person);

person.name = 'Rodwell';
console.log(person);

person.name = 'Marche';
person.email = 'marche@gmail.com';
console.log(person);

//Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(a);
console.log(d);
