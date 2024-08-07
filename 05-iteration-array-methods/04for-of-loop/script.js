//Loop through arrays
const items = ['book', 'table', 'chair', 'cup'];
const users = [{ name: 'Ryan' }, { name: 'Alden' }, { name: 'Cat' }];

//old ways to do it
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

//for of
for (const item of items) {
  console.log(item);
}

//for of array in objects
for (const user of users) {
  console.log(user);
}

//to access specific property
for (const user of users) {
  console.log(user.name);
}

//loop over strings
const str = 'Hello World';
for (const letter of str) {
  console.log(letter);
}

//loop over maps
const map = new Map();
map.set('name', 'Ryan');
map.set('age', 19);

for (const [key, value] of map) {
  console.log(key, value);
}
