let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addIten)

function addIten(data) {
  let input = document.getElementById('shooter');
  let list = document.getElementById('todo-list');

  if (input.value !== '' && input.value !== null) {

    let newItem = document.createElement('li');

    newItem.innerText = input.value;
    list.appendChild(newItem)
  }
  console.log(input.value);
  input.value = '';
}