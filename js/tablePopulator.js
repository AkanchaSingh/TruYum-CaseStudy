var users =[
   { id: 1, name: 'Coke', price: 120},
    { id: 2, name: 'Burger', price: 240},
    { id: 3, name: 'Pasta', price: 350},
    { id: 4, name: 'Nuggets', price: 260},
    { id: 5, name: 'Chocolate Brownies', price: 95}
];
const cart = [];

if(document.title === "Admin Home page") {
	
	let adminarray
	if(localStorage.getItem('user')){
		adminarray=JSON.parse(localStorage.getItem('user'))
	}
	else{
		adminarray=users
	}

    let table = document.createElement('table')

    table.classList.add('menuTable')
    let thead = table.createTHead()
   
    let tbody = table.createTBody()

    let headerRow = thead.insertRow(0)

    let idCell = headerRow.insertCell()
    let nameCell = headerRow.insertCell()
    let priceCell = headerRow.insertCell()
	let actioncell=headerRow.insertCell()
        

    idCell.innerText = "ID"
    nameCell.innerText = "NAME"
    priceCell.innerText = "Price"
    actioncell.innerText="Action"
	
    adminarray.forEach(function (user) {
        let dataRow = tbody.insertRow()

        let idRowCell = dataRow.insertCell()
        let nameRowCell = dataRow.insertCell()
        let priceRowCell = dataRow.insertCell()
        let editCell = dataRow.insertCell()

        idRowCell.innerText = user.id
        // nameRowCell.innerText = user.name
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("value", user.name);
        x.addEventListener('change', (e) => {
            user.name = e.target.value;
            const idx = users.findIndex(u => u.id === user.id);
            users[idx] = user;
			localStorage.setItem('user',JSON.stringify(users));
        })
        nameRowCell.appendChild(x);
        // priceRowCell.innerText = user.price
        var y = document.createElement("INPUT");
        y.setAttribute("type", "number");
        y.setAttribute("value", user.price);
        y.addEventListener('change', (e) => {
            user.price = parseInt(e.target.value);
            const idx = users.findIndex(u => u.id === user.id);
            users[idx] = user;
			localStorage.setItem('user',JSON.stringify(user));
        })
        priceRowCell.appendChild(y);
		

        let button = document.createElement('button')
        button.innerText = 'Edit'
        button.addEventListener('click', () => {
            
        });
       

        // bind the click event handler and pass the index as parameter
        editCell.appendChild(button)

        // console.log(index)
    })

    document.getElementById('tableContainer').appendChild(table)
}
else if(document.title === "Customer Home page")
{
	let narray
	if(localStorage.getItem('user')){
		narray=JSON.parse(localStorage.getItem('user'))
	}
	else{
		narray=users
	}
	 let table = document.createElement('table')

    table.classList.add('menuTable')
    let thead = table.createTHead()
   
    let tbody = table.createTBody()

    let headerRow = thead.insertRow(0)

    let idCell = headerRow.insertCell()
    let nameCell = headerRow.insertCell()
    let priceCell = headerRow.insertCell()
	let actioncell=headerRow.insertCell()
        

    idCell.innerText = "ID"
    nameCell.innerText = "NAME"
    priceCell.innerText = "Price"
    actioncell.innerText="Action"
	
    narray.forEach(function (user) {
        let dataRow = tbody.insertRow()

        let idRowCell = dataRow.insertCell()
        let nameRowCell = dataRow.insertCell()
        let priceRowCell = dataRow.insertCell()
        let editCell = dataRow.insertCell()

        idRowCell.innerText = user.id
        nameRowCell.innerText = user.name
        priceRowCell.innerText = user.price		

        let button = document.createElement('button')
        button.id = user.id
        button.innerText = 'Add to Cart'
        button.addEventListener('click', () => {
            cart.push(user)
            localStorage.setItem('cart', JSON.stringify(cart));
        });
       

        // bind the click event handler and pass the index as parameter
        editCell.appendChild(button)

        // console.log(index)
        })

    document.getElementById('tableContainer').appendChild(table)
	
}
