//querySelectorAll() - return a NodeList of all elements within the document that match the specified CSS selector

const listItems = document.querySelectorAll('.item');
console.log(listItems);

//access elements by index
console.log(listItems[1].innerText);

//Setting a color for specific element
listItems[1].style.color = 'red';

//since sya ay nodelist pwede kang gumamit ng high array methods
//we can utilize for each
listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = ` Oranges  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;
  }
});

//getElementsByClassName() - returns an HTML Collection

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2);
// console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});
