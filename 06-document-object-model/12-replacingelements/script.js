//replaceWith() Method

function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child'); //bring in the item that you want to replace

  const li = document.createElement('li'); //create your new element
  li.textContent = 'Banana'; //set the new value or text

  firstItem.replaceWith(li);
}

replaceFirstItem();

//OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Banana Cake</li>';
}

replaceSecondItem();

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  //   lis.forEach((item, index) => {
  //     // item.outerHTML = '<li>Mango Sabaw</li>';
  //     // item.innerHTML = 'replace all';

  //     if (index === 1) {
  //       item.innerHTML = 'Mango';
  //     } else {
  //       item.innerHTML = 'sabaw';
  //     }
  //   });

  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Mango Float</li>' : '<li>Sago</li>')
  );
}

replaceAllItems();
