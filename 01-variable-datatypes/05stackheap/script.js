// Value is stored in the stack
const name = 'John';
const age = 30;

//Reference is stored in Heap
const person = {
  name: 'Ryan',
  age: 40,
};

newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Benjie';

//#######################################

console.log(name, newName);
console.log(person, newPerson);

console.log(name);
console.log(age);
