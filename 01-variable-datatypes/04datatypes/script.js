// String
const firstName = 'Ryan';

// Number
const age = 19;
const temp = 32.124;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score1 = undefined;
const score = undefined;

// Symbol
const id = Symbol('id');

//BigInt
const n = 12345761238945789235789234n;

//Reference Types
const number = [1, 2, 3, 4];

const person = {
  name: 'Ryan',
  age: 39,
};

function sayHello() {
  console.log('Hello');
}

// ###############################
const output = sayHello;
console.log(output, typeof output);
