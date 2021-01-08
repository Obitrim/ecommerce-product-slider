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
		name: 'orange Red sneakers',
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
let selectedIndex = 3;

// Nodes
const card = document.querySelector('.Main__Info');
const mainElement = document.querySelector('.Main');
const productImg = document.querySelector('.ProductImg');
const productName = document.querySelector('.Main__Name');
const nextBtn = document.querySelector('.ControlBtn--Next');
const prevBtn = document.querySelector('.ControlBtn--Prev');
const sizesValuesWrapper = document.querySelector('.Card__Sizes__Values');
const colorValuesWrapper = document.querySelector('.Card__Colors__Values');

document.addEventListener('DOMContentLoaded', () => {
	renderProduct();
});

prevBtn.addEventListener('click', () => {
	selectedIndex = selectedIndex === 0 ? products.length - 1 : selectedIndex - 1;
	renderProduct();
});

nextBtn.addEventListener('click', () => {
	// let lastProductIndex = products.length - 1;
	selectedIndex = selectedIndex === products.length - 1 ? 0 : selectedIndex + 1;
	renderProduct();
});

function renderProduct() {
	let product = products[selectedIndex];
	// render values
	productName.innerText = product.name;
	productImg.src = product.image;
	mainElement.style.setProperty('--theme-color',  product.color);
	renderSizes(product.sizes);
	renderColors(product.colors);
	// add animation
}

function renderSizes(sizes) {
	let template = sizes.map(size => `<input name="size" value="${size}" type="radio"/>`).join('');
	sizesValuesWrapper.innerHTML = template;
}

function renderColors(colors) {
	let template = colors.map(size => `<input name="size" value="${size}" type="radio"/>`).join('');
	colorValuesWrapper.innerHTML = template;
}