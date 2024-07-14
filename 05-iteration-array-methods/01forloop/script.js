// for ([initial expression]; [condition expression]; [increment]) {
//     [statement]
// }

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

//Note: utilize let for the counter variable (do not use const)

//to print numbers 0 to 10
// for (let i = 0; i <= 10; i++) {
//   console.log('Number ' + i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// //multiplication table
//nested loops
// for (let i = 1; i <= 5; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//looping through an array
// const names = ['Ryan', 'Marche', 'Rod', 'Anne', 'Fred'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

const names = ['Ryan', 'Marche', 'Rod', 'Anne', 'Fred'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'Marche') {
    console.log(names[i] + ' is the boss');
  } else {
    console.log(names[i]);
  }
}
