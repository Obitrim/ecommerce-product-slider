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
const toastWrapper = document.getElementsByClassName("Toast")[0];
const buyNowBtn = document.getElementsByClassName("BuyNowBtn")[0];
const sizesValuesWrapper = document.querySelector('.Card__Sizes__Values');
const colorValuesWrapper = document.querySelector('.Card__Colors__Values');

document.addEventListener('DOMContentLoaded', () => {
	renderProduct();
	buyNowBtn.addEventListener("click", () => {
		let toastMessage = `${products[selectedIndex].name} will be delivered to you within 24hrs. Thanks for working with us`;
		document.getElementsByClassName("Toast__Message")[0].innerText = toastMessage;
		toastWrapper.classList.add("Show");
		setTimeout(() => {
			toastWrapper.classList.remove("Show");
		}, 4000);
	});
});

prevBtn.addEventListener('click', () => {
	selectedIndex = selectedIndex === 0 ? products.length - 1 : selectedIndex - 1;
	renderProduct();
});

nextBtn.addEventListener('click', () => {
	selectedIndex = selectedIndex === products.length - 1 ? 0 : selectedIndex + 1;
	renderProduct();
});

function renderProduct() {
	let product = products[selectedIndex];
	// remove animation
	mainElement.classList.remove('Main--Animate');
	// render values
	setTimeout(() => {
		productImg.src = product.image;
		productImg.addEventListener("load", function() {
			productName.innerText = product.name;
			document.body.style.setProperty('--theme-color',  product.color);
			renderSizes(product.sizes);
			renderColors(product.colors);
		});
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