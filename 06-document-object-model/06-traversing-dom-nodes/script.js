let output;

//get the child nodes
const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;

//change child1 to Child One
output = parent.childNodes[3].innerText = 'Child One';
//change the color of Child 2
output = parent.childNodes[5].style.color = 'red';

// get parent node

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

//Get sibling Nodes
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
console.log(output);
