//Syntax

// variable initialization
// while ([conditionExpression]) {
//     statement
// }

let i = 0;

// while (i <= -1) {
//   console.log('Number ' + i);
//   i++;
// }

//Loop through arrays
// const arr = [10, 20, 30, 40, 50];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// //nesting while loops
// while (i <= 5) {
//   console.log('Number ' + i);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

//Do while - always runs once
do {
  console.log('Number ' + i);
  i++;
} while (i <= -1);
