let output;

//get child elements from a parent
const parent = document.querySelector('.parent');
output = parent.children;

output = parent.children[1].innerText; //child 2
output = parent.children[1].className; //child
output = parent.children[1].nodeName; //DIV

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

//get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//get siblings element
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'blue';
console.log(output);
