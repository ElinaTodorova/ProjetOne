const productTable = [

    {
        name: "Call Of Duty",
        price: 19.99,
        img: "assets/callofduty.png",
        console: "Xbox"
    },
    {
        name: "Battle Field",
        price: 9.99,
        img: "assets/battlefield.png",
        console: "Xbox et pc"
    },
    {
        name: "Stars Wars",
        price: 21.89,
        img: "assets/starwars.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Red Dead",
        price: 35.99,
        img: "assets/reddead.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "StarField",
        price: 50.00,
        img: "assets/starfield.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "CyberPunk",
        price: 24.99,
        img: "assets/cyberpunk.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Baldur's Gate",
        price: 40.00,
        img: "assets/baldurs.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Counter Strike",
        price: 19.99,
        img: "assets/counterstrike.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "PAYDAY 3",
        price: 27.99,
        img: "assets/payday3.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Lies of P",
        price: 60.00,
        img: "assets/liesofp.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Apex Legend",
        price: 9.99,
        img: "assets/apexlegend.png",
        console: "XboxPS5 PC"
    },
    {
        name: "Resident evil 4",
        price: 59.99,
        img: "assets/residentevil4.png",
        console: "XboxPS5 PC"
    },
    {
        name: "Jagged Alliance 3",
        price: 20.00,
        img: "assets/jaggedalliance.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Planet Zoo",
        price: 30.00,
        img: "assets/planetzoo.png",
        console: "XboxPS5 PC"
    },
    {
        name: "The Witcher",
        price: 45.99,
        img: "assets/thewitcher3.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Final Fantasy",
        price: 49.99,
        img: "assets/finalfantaisy.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Day Z",
        price: 9.99,
        img: "assets/dayz.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Destiny 2",
        price: 40.00,
        img: "assets/destiny2.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "Rust",
        price: 39.99,
        img: "assets/rust.png",
        console: "Xbox PS5 PC"
    },
    {
        name: "The Sims 4",
        price: 39.99,
        img: "assets/sims4.png",
        console: "Xbox PS5 PC"
    },

]

let allProducts = document.querySelector(".allProducts")
console.log(productTable)




function createProduct(name, price, imgURL, platform) {



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


    let support = document.createElement("p");
    support.classList.add("console");
    support.innerHTML = `${platform}`
    boxProduct.appendChild(support)

    let gameName = document.createElement("h3");
    gameName.classList.add("gameName")
    gameName.innerHTML = `${name}`
    boxProduct.appendChild(gameName)

    let productPrice = document.createElement("p")
    productPrice.classList.add("poductPrice")
    productPrice.innerHTML = `${price}$`;
    boxProduct.appendChild(productPrice)

    let addToCart = document.createElement("button");
    addToCart.classList.add("addToCart");
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );

    iconSvg.setAttribute('fill', 'white');
    iconSvg.setAttribute('viewBox', '0 0 576 512');
    iconSvg.setAttribute('stroke', 'black');
    iconSvg.setAttribute('width', '1.5rem');
    iconSvg.setAttribute('heigth', '1.5rem')
    iconSvg.classList.add('cartItemP');

    iconPath.setAttribute('d', 'M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z')
    iconSvg.appendChild(iconPath);

    let paragrapheAdd = document.createElement('p');
    paragrapheAdd.textContent = 'Add to Cart';
    
    addToCart.appendChild(paragrapheAdd);
    addToCart.appendChild(iconSvg)
    boxProduct.appendChild(addToCart);


}

productTable.forEach((product) => {
    createProduct(product.name, product.price.toFixed(2), product.img, product.console);
});


const menuElement = document.getElementById("menuEl");

menuElement.addEventListener("click", (e) => {
    e.preventDefault();

    let hiddenList = document.querySelector(".hidden");
    hiddenList.classList.toggle("visible");

});

let btnLeft = document.querySelector("#btn-left");
let bntRight = document.querySelector("#btn-right");
let btn = document.querySelector(".toggle-btn");
let translatee = document.querySelector(".btn-translate");

btnLeft.onclick = function trans() {
    translatee.style.transform = "translate(2%)";
    btnLeft.style.color = "white";
    bntRight.style.color = "orangered";
};

bntRight.onclick = function transform() {

    translatee.style.transform = "translate(97%)";
    btnLeft.style.color = "orangered";
    bntRight.style.color = "white";
};


let quantityCart = 0;
const buttonAdd = document.querySelectorAll('.addToCart');
let listItem = document.getElementById('cartItem');
let divElement = document.createElement('div')
let quantityP = document.createElement('p');
let toastBoxElement = document.getElementById('toastBox');


buttonAdd.forEach(button => {
    button.addEventListener('click', () => {
        quantityCart++;
        quantityP.textContent = quantityCart;
        divElement.classList.add('quantityDiv')
        divElement.appendChild(quantityP);

        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = `Item successfully added to cart!`;
    
        toastBoxElement.appendChild(toast);
        listItem.appendChild(divElement);
    
        setTimeout(() => {
            toast.remove();
        }, 5000)
       })

})

// filter "Best Seller"=================== >

const removeDiv = document.querySelectorAll('.container')


const highPrice = productTable.filter((prices) => prices.price > 30)

btnLeft.addEventListener("click", () => {
    console.log("jb")
    const removeDiv = document.querySelectorAll('.container')
    removeDiv.forEach(container => {
        container.remove()
    })
    highPrice.forEach((products) => {
        createProduct(products.name, `${products.price.toFixed(2)} `, products.img, products.console);
    })
});

// filter "Newest"========================= >

const lowPrice = productTable.filter((prices) => prices.price < 30)

bntRight.addEventListener("click", () => {
    console.log("Newest")
    const removeDiv = document.querySelectorAll('.container')
    removeDiv.forEach(container => {
        container.remove()
    })
    lowPrice.forEach((products) => {
        createProduct(products.name, `${products.price.toFixed(2)}`, products.img, products.console);
    })

})






