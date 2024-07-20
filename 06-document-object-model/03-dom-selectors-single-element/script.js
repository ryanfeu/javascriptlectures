//document.getElementById()

console.log(document.getElementById('app-title'));

//get attributes
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//set attributes
document.getElementById('app-title').title = 'Shopping List';

const title = document.getElementById('app-title');
//get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Is it me your looking for?';
title.innerHTML = '<strong> Shopping List</strong>';

//change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//use any css selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('.input[type="text"]'));

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';
