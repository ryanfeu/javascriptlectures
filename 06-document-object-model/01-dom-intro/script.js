//global window object
// console.log(window);

// document object is part of the window object
// console.dir(window.document);

//we can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);

//set properties of elements
// document.body.innerHTML = '<h1> Hello from Body</h1>';

//the document object has tons of methods. One is `document.write()` which will write something to the document
// document.write('Hello from JS');

//we also methods to select elements more directly
// document.getElementById('main').innerHTML = '<h1>Hello from Main</h1>';

document.querySelector('#main h1').innerText = 'Hello';
