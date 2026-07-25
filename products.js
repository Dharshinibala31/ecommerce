// ==========================
// PRODUCT DATA
// ==========================

const products = [

{
    id:1,
    name:"HP Laptop",
    category:"Laptop",
    price:65000,
    image:"images/laptop.jpg",
    description:"Powerful laptop for work and study."
},

{
    id:2,
    name:"Samsung Galaxy",
    category:"Mobile",
    price:28000,
    image:"images/mobile.jpg",
    description:"Latest Android smartphone."
},

{
    id:3,
    name:"Apple Watch",
    category:"Watch",
    price:35000,
    image:"images/watch.jpg",
    description:"Smart watch with fitness tracking."
},

{
    id:4,
    name:"Sony Headphones",
    category:"Headphone",
    price:8000,
    image:"images/headphone.jpg",
    description:"Noise cancelling wireless headphones."
},

{
    id:5,
    name:"Dell Inspiron",
    category:"Laptop",
    price:72000,
    image:"images/laptop2.jpg",
    description:"High performance Dell laptop."
},

{
    id:6,
    name:"iPhone 15",
    category:"Mobile",
    price:79000,
    image:"images/iphone.jpg",
    description:"Apple iPhone with powerful camera."
}

];

// ==========================
// DISPLAY PRODUCTS
// ==========================

const productContainer =
document.getElementById("productContainer");

const featuredProducts =
document.getElementById("featuredProducts");

function displayProducts(productArray, container){

    if(!container) return;

    container.innerHTML="";

    productArray.forEach(product=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <p class="price">₹${product.price}</p>

            <button class="btn"
                    onclick="addToCart(${product.id})">

                Add to Cart

            </button>

        </div>

        `;

    });

}

// ==========================
// FEATURED PRODUCTS
// ==========================

if(featuredProducts){

    displayProducts(products.slice(0,4),
    featuredProducts);

}

if(productContainer){

    displayProducts(products,
    productContainer);

}

// ==========================
// SEARCH
// ==========================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const keyword=
searchInput.value.toLowerCase();

const filtered=
products.filter(product=>

product.name.toLowerCase().includes(keyword)

);

displayProducts(filtered,
productContainer);

});

}

// ==========================
// CATEGORY FILTER
// ==========================

const filterButtons=
document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active")
.classList.remove("active");

button.classList.add("active");

const category=
button.dataset.category;

if(category==="all"){

displayProducts(products,
productContainer);

}

else{

const filtered=
products.filter(product=>

product.category===category

);

displayProducts(filtered,
productContainer);

}

});

});

// ==========================
// CART
// ==========================

function addToCart(id){

let cart=
JSON.parse(localStorage.getItem("cart")) || [];

const product=
products.find(item=>item.id===id);

cart.push(product);

localStorage.setItem("cart",
JSON.stringify(cart));

alert(product.name+" added to cart!");

}