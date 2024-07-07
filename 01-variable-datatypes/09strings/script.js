let x;

const name = 'Ryan';
const age = 31;

//Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

//Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

//String Properties and Methods
//Creating a "string object" (JS does this automatically when using a property or method on a primitive string)
const s = new String('HelloWorld ');

x = typeof s;

x = s.length; //11

//access value by key
x = s[5];

//show the prototype of the string object so that you can see the properties and methods
x = s.__proto__;

//change case
// x = s.toUpperCase();
// x = s.toLowerCase();

//charAt() - returns the characted at the specified index
x = s.charAt(0); //H

//indexOf - returns the index of the first occurence of a specified value in a string
x = s.indexOf('d'); //10

//substring() - search a string for a specified value
x = s.substring(2, 7); //llo

//slice() - extracts a part of a string and returns a new string

x = s.slice(-11, -6);

//trim() - removes whitespace from beginning and end of a string
x = '                 Hello World     ';
x = x.trim();

// includes() - returns true if the string is found
x = s.includes('Hell');
//split() - returns an array of strings
// x = s.split('');

console.log(x);
