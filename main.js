const products = [
	{
		name: 'Red sneakers',
		colors: ['red', 'green', 'blue'],
		sizes: ['41', '43', '45'],
		image: './images/red.png',
		color: '#FA3C4D'
	},
	{
		name: 'soldier sneakers',
		colors: ['black', 'green', 'yellow'],
		sizes: ['41', '43', '45'],
		image: './images/soldier.png',
		color: '#4D563F'
	},
	{
		name: 'orange Red',
		colors: ['orange', 'pink', 'blue'],
		sizes: ['41', '43', '45'],
		image: './images/orange-red.png',
		color: '#F14D49'
	},
	{
		name: 'yellow sneakers',
		colors: ['yellow', 'green', 'blue'],
		sizes: ['41', '43', '45'],
		image: './images/yellow.png',
		color: '#F6C531'
	}
];
let selectedIndex = 0;

// Nodes
const card = document.querySelector('.Main__Info');
const mainElement = document.querySelector('.Main');
const productImg = document.querySelector('.ProductImg');
const productName = document.querySelector('.Main__Name');
const nextBtn = document.querySelector('.ControlBtn--Next');
const prevBtn = document.querySelector('.ControlBtn--Prev');
const sizesValuesWrapper = document.querySelector('.Card__Sizes__Values');
const colorValuesWrapper = document.querySelector('.Card__Colors__Values');

document.addEventListener('DOMContentLoaded', async () => {
	let firstProductImage = await fetch(products[selectedIndex].image);
	let secondProductImage = await fetch(products[selectedIndex + 1].image);
	Promise.all([firstProductImage, secondProductImage]).then(values => {
		products[selectedIndex].image = values[0];
		products[selectedIndex + 1].image = values[1];
	}).catch(error => { console.error(error)});
	renderProduct(products[selectedIndex]);
});

prevBtn.addEventListener('click', () => {
	selectedIndex = selectedIndex === 0 ? products.length - 1 : selectedIndex - 1;
	renderProduct(products[selectedIndex]);
});

nextBtn.addEventListener('click', async () => {
	selectedIndex = selectedIndex === products.length - 1 ? 0 : selectedIndex + 1;
	if (selectedIndex < products.length - 1){
		try {
			let nextProductImage = await fetch(products[selectedIndex + 1].image);
			products[selectedIndex + 1] = nextProductImage;
		} catch(e) { console.error(e)}
	}
	renderProduct(products[selectedIndex]);
});

function renderProduct(product) { 
	// let product = products[selectedIndex];
	// remove animation
	mainElement.classList.remove('Main--Animate');
	// render values
	setTimeout(() => {
		productName.innerText = product.name;
		productImg.src = product.image;
		document.body.style.setProperty('--theme-color',  product.color);
		renderSizes(product.sizes);
		renderColors(product.colors);
		// add animation
		mainElement.classList.add('Main--Animate');
	}, 250);
}

function renderSizes(sizes) {
	let template = sizes.map((size, index) => (
		`<label class="Card__Sizes__Value">
			<input 
				type="radio"
				class="Card__Sizes__RadioInput"
				name="size" 
				value="${size}" 
				/>
			${size}
		</label>`
	)).join('');
	sizesValuesWrapper.innerHTML = template;
}

function renderColors(colors) {
	let template = colors.map((color, index) => (
		`<input 
			type="radio"
			name="colors" 
			class="Card__Colors__RadioInput"
			style="background-color: ${color}" 
			value="${color}" 
			/>`
		)
	).join('');
	colorValuesWrapper.innerHTML = template;
}