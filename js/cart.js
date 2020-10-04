const cart = JSON.parse(localStorage.getItem('cart'));

let table = document.createElement('table');

table.classList.add('menuTable');
let thead = table.createTHead();

let tbody = table.createTBody();

let headerRow = thead.insertRow(0);

let idCell = headerRow.insertCell();
let nameCell = headerRow.insertCell();
let priceCell = headerRow.insertCell();

idCell.innerText = 'ID';
nameCell.innerText = 'NAME';
priceCell.innerText = 'Price';

for (item of cart) {
  let dataRow = tbody.insertRow();

  let idRowCell = dataRow.insertCell();
  let nameRowCell = dataRow.insertCell();
  let priceRowCell = dataRow.insertCell();

  idRowCell.innerText = item.id;
  nameRowCell.innerText = item.name;
  priceRowCell.innerText = item.price;
}

document.getElementById('tableContainer').appendChild(table)
