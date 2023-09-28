const productTable = [
    {
        name: "Call Of Duty",
        price: "19.99$",
        img: "assets/callofduty.png",
        console: "Xbox"
    },
    {
        name: "Battle Field",
        price: "9.99$",
        img: "assets/callofduty.png",
        console: "Xbox et pc"
    },
    {
        name: "Stars Wars",
        price: "21$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Red Dead",
        price: "35.99$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "StarField",
        price: '50$',
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "CyberPunk",
        price: "24.99$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Baldur's Gate",
        price: "40$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Counter Strike",
        price: "19.99$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "PAYDAY 3",
        price: "27$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Lies of P",
        price: "60$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Apex Legend",
        price: "9.99$",
        img: "assets/callofduty.png",
        console: "XboxPS5 PC"
    },
    {
        name: "Resident evil 4",
        price: "59.99$",
        img: "assets/callofduty.png",
        console: "XboxPS5 PC"
    },
    {
        name: "Jagged Alliance 3",
        price: "20$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Planet Zoo",
        price: "30$",
        img: "assets/callofduty.png",
        console: "XboxPS5 PC"
    },
    {
        name: "The Witcher",
        price: "45$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Final Fantasy",
        price: "49.99$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Day Z",
        price: "9$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Destiny 2",
        price: "40$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Rust",
        price: "39.99",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "The Sims 4",
        price: "39.99$",
        img: "assets/callofduty.png",
        console: "Xbox PS5 PC"
    },

]

let allProducts = document.querySelector(".allProducts")
console.log(productTable)




function createProduct(name, price, imgURL, platform) {

    console.log('coucou')

    let container = document.createElement("div");
    container.classList.add("container");
    allProducts.appendChild(container);

    let productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    container.appendChild(productContainer);

    let boxProduct = document.createElement("div");
    boxProduct.classList.add("boxProduct");
    productContainer.appendChild(boxProduct)

    let productImg = document.createElement("img");
    productImg.style.backgroundImage = `url(${imgURL})`
    productImg.classList.add("productImg");
    boxProduct.appendChild(productImg);


    let support = document.createElement("div");
    support.classList.add("console");
    support.innerHTML = `${platform}`
    boxProduct.appendChild(support)

    let gameName = document.createElement("div");
    gameName.classList.add("gameName")
    gameName.innerHTML = `${name}`
    boxProduct.appendChild(gameName)

    let productPrice = document.createElement("div")
    productPrice.classList.add("poductPrice")
    productPrice.innerHTML = `${price}`
    boxProduct.appendChild(productPrice)

    let addToCart = document.createElement("button")
    addToCart.classList.add("addToCart")
    addToCart.innerHTML = `Add to Cart`
    boxProduct.appendChild(addToCart)

}


productTable.forEach((product) => {
    createProduct(product.name, product.price, product.img, product.console)
})


const menuElement = document.getElementById('menuEl');

menuElement.addEventListener('click', (e) => {
    e.preventDefault();

    let hiddenList = document.querySelector('.hidden');
    hiddenList.classList.toggle('visible');
});

let btnLeft = document.querySelector("#btn-left")
let bntRight = document.querySelector("#btn-right")
let btn = document.querySelector(".toggle-btn")
let translatee = document.querySelector(".btn-translate")


btnLeft.onclick = function trans() {
    translatee.style.transform = "translate(2%)"
    btnLeft.style.color = "white"
    bntRight.style.color = "orangered"
}

bntRight.onclick = function transform() {
    translatee.style.transform = "translate(97%)"
    btnLeft.style.color = "orangered"
    bntRight.style.color = "white"
}



let quantityCart = 0;
const buttonAdd = document.querySelectorAll('.addToCart');
let listItem = document.getElementById('cartItem');
let divElement = document.createElement('div')
let quantityP = document.createElement('p');


buttonAdd.forEach(button => {
   button.addEventListener('click', () => {
    quantityCart++;
    quantityP.textContent = quantityCart;
    divElement.classList.add('quantityDiv')
    divElement.appendChild(quantityP);

    listItem.appendChild(divElement)
   })
})

