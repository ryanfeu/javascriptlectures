//quick and dirty
function createListiItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
    </button>`;

  document.querySelector('.items').appendChild(li);
}
createListiItem('Kirkland Milk Chocolate Almonds');

//clean and performant
function createNewItem(item) {

const li

const button

const icon


button.appendChild(icon);
li.appendChild(button)


}

createNewItem('Turon')