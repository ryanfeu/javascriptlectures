const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World';
//personally, iprefer createTextNode, then append

const text = document.createTextNode('kirkland almonds');
div.appendChild(text);

console.log(div);
// console.log(div.textContent);

// document.body.appendChild(div);

//dapat nakalagay sa loob ng ul
document.querySelector('ul').appendChild(div);
