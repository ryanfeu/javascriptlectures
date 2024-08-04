//remove - it is called on the element you want to remove

//removing the clear button
function removeClearButton() {
  //   document.querySelector('#clear').remove();
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}
removeClearButton();

//removeChild() method //remove the apple
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}
// removeFirstItem();

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

// removeItem(1);
// removeItem(2);

//querySelectorAll
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

// removeItem2(1);
// removeItem2(2);
