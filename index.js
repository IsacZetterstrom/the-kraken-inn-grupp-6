let main = document.querySelector('main');
let foodCategory = document.querySelector("nav .food-category");
let drinksCategory = document.querySelector("nav .drinks-category");
let bestFoodCategory = document.querySelector("nav .home");
let sweetsCategory = document.querySelector("nav .sweets-category")
foodCategory.addEventListener('click', openFoodMenu);
drinksCategory.addEventListener('click', openDrinksMenu);
bestFoodCategory.addEventListener('click', openHighlightsMenu);
sweetsCategory.addEventListener('click', openSweetsMenu)

// Cart
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".close-cart");
let products = document.querySelectorAll(".add-cart");
let cartRemove = document.querySelector(".cart-remove");
let productPrice = document.querySelector(".product-price").textContent;
console.log(productPrice);
let cartQuantity = document.querySelector(".cart-quantity");
let quantity = cartQuantity.value
console.log(cartQuantity);
let totalPrice = document.querySelector(".total-price").textContent;
console.log(totalPrice);
let total = 0;
let shoppingCart = [];
// Open Cart
cartIcon.addEventListener('click', function() {
  cart.classList.add("active");
  main.style.opacity = "0.5";
  main.style.transition = "800ms";
});

// Close Cart
closeCart.addEventListener('click', function() {
  cart.classList.remove("active");
});

// Update the number of items in the cart
function updateCart() {
  for(let i = 0; i < products.length; i++) {
      products[i].addEventListener('click', function(event) {
          let product = event.target;
          let cartTotal = document.querySelector('.cart-total');
          shoppingCart.push(product);
          cartTotal.textContent = shoppingCart.length; 
      });
  }
}
updateCart();

// Add event listener to the remove button in the cart
function handelCartRemove () {
  let cartBox = document.querySelector(".cart-box");
  cartBox.style.display ="none";
  totalNumber = 0;
}

cartRemove.addEventListener('click', handelCartRemove);

// Add event listener to the change of product quantity, working on...
cartQuantity.addEventListener('change', function(event){
  total = total + productPrice * cartQuantity;
  console.log(total);
});


function generateFoodList(category){
  for (let i = 0; i < db[category].length; i++) {
    let newArticle = document.createElement("article");
    let foodContent = 
    `<h2 class="product-title" translate="no">${db[category][i].name}</h2>
    <figure>
    <img class="product-img" src="${db[category][i].img}"/>
    </figure>
    <p translate="no">${db[category][i].dsc}</p>
    <p class="price" translate="no">${db[category][i].price} sek</p>
    <button class="add-cart buttonStyle">Add to cart</button>`;
    newArticle.className = "card";
    newArticle.innerHTML = foodContent;
    main.append(newArticle);
  }
}
function foodCategories(){
  let newDiv = document.createElement('div');
  let categories = `
  <button class = "bbqs categoryBtn buttonStyle">bbqs</button>
  <button class = "steaks categoryBtn buttonStyle">steaks</button>
  <button class = "porks categoryBtn buttonStyle">porks</button>
  <button class = "fried categoryBtn buttonStyle">fried-chicken</button>
  <button class = "sausages categoryBtn buttonStyle">sausages</button>
  <button class = "pizzas categoryBtn buttonStyle">pizzas</button>
  <button class = "burgers categoryBtn buttonStyle">burgers</button>
  <button class = "sandwiches categoryBtn buttonStyle">sandwiches</button>
  <button class = "breads categoryBtn buttonStyle">breads</button>`
  newDiv.innerHTML = categories;
  newDiv.className = "foodCategories";
  main.append(newDiv);
}
function sweetsCategories(){
  let newDiv = document.createElement('div');
  let categories = `
  <button class = "desserts categoryBtn buttonStyle">Desserts</button>
  <button class = "chocolates categoryBtn buttonStyle">Chocolates</button>
  <button class = "ice-cream categoryBtn buttonStyle">Ice-cream</button>`
  newDiv.innerHTML = categories;
  newDiv.className = "sweetsCategories";
  main.append(newDiv);
}
function clearMenu() {
  main.innerHTML = "";
}
 function openDrinksMenu(){
  clearMenu();
   generateFoodList("drinks");
 }
 function openHighlightsMenu(){
  clearMenu();
   generateFoodList("best-foods");
 }
 function openSweetsMenu(){
  clearMenu();
  sweetsCategories();
  let desserts = document.querySelector('main .desserts');
  desserts.addEventListener('click', openDesserts);
  let chocolates = document.querySelector('main .chocolates');
  chocolates.addEventListener('click', openChocolates);
  let icecream = document.querySelector('main .ice-cream');
  icecream.addEventListener('click', openIcecream);
 }
 function openDesserts(){
  clearMenu();
  generateFoodList("desserts");
 }
 function openChocolates(){
  clearMenu();
  generateFoodList("chocolates")
 }
 function openIcecream(){
  clearMenu();
  generateFoodList("ice-cream")
 }
function openFoodMenu() {
  clearMenu();
  foodCategories();
  let bbqs = document.querySelector('main .bbqs');
  bbqs.addEventListener('click', openBbqs)
  let steaks = document.querySelector('main .steaks');
  steaks.addEventListener('click', opensteaks)
  let porks = document.querySelector('main .porks');
  porks.addEventListener('click', openporks)
  let fried = document.querySelector('main .fried');
  fried.addEventListener('click', openfried)
  let sausages = document.querySelector('main .sausages');
  sausages.addEventListener('click', opensausages)
  let pizzas = document.querySelector('main .pizzas');
  pizzas.addEventListener('click', openpizzas)
  let burgers = document.querySelector('main .burgers');
  burgers.addEventListener('click', openburgers)
  let sandwiches = document.querySelector('main .sandwiches');
  sandwiches.addEventListener('click', opensandwiches)
  let breads = document.querySelector('main .breads');
  breads.addEventListener('click', openbreads)
 }
 function openBbqs(){
  clearMenu();
  generateFoodList("bbqs");
 }
 function opensteaks (){
  clearMenu();
  generateFoodList("steaks");
 }
 function openporks (){
  clearMenu();
  generateFoodList("porks");
 }
 function openfried (){
  clearMenu();
  generateFoodList("fried-chicken");
 }
 function opensausages (){
  clearMenu();
  generateFoodList("sausages");
 }
 function openpizzas (){
  clearMenu();
  generateFoodList("pizzas");
 }
 function openburgers (){
  clearMenu();
  generateFoodList("burgers");
 }
 function opensandwiches (){
  clearMenu();
  generateFoodList("sandwiches");
 }
 function openbreads (){
  clearMenu();
  generateFoodList("breads");
 }


// translate

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: "en"}, 'google_translate_element');
}

function ChangeSwe(e) {
  var lang = document.getElementById("lang-sv").value;
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
    var option = selectField.children[i];
    // find desired langauge and change the former language of the hidden selection-field 
    if(option.value==lang){
       selectField.selectedIndex = i;
       // trigger change event afterwards to make google-lib translate this side
       selectField.dispatchEvent(new Event('change'));
       break;
    }
  }
}

function changeEng(e) {
  var lang = document.getElementById("lang-en").value;
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
    var option = selectField.children[i];
    // find desired langauge and change the former language of the hidden selection-field 
    if(option.value==lang){
       selectField.selectedIndex = i;
       // trigger change event afterwards to make google-lib translate this side
       selectField.dispatchEvent(new Event('change'));
       break;
    }
  }
}


//this function creates an input where the costumer can put in an amount
//of money that he/she wants to spend during the night. This amount will
//be appended to a p tag somewhere on the page.
function createFormMoneyInput(){
  let moneyForm = document.createElement('form');
  let moneyAmountInput = document.createElement('input');
  let moneyAmountSubmitBtn = document.createElement('button');
  moneyAmountSubmitBtn.innerText = 'add my money';
 moneyAmountInput.setAttribute('type', 'text')
  cart.append(moneyForm);
  moneyForm.append(moneyAmountInput);
  moneyForm.append(moneyAmountSubmitBtn);
  moneyForm.addEventListener('submit', function(event){
    event.preventDefault();
    let amountH2 = document.querySelector('h2');
    amountH2.innerText = 'you have this much left to spend:'
    
    let moneyAmountP = document.createElement('p');
    moneyAmountP.classList.add("moneyP");
    let cartBox = document.querySelector(".cart-box");
   cartBox.append(moneyAmountP);
   //p2.innerText = moneyAmountP;
   moneyAmountP.innerText = `${moneyAmountInput.value}`;
   //counter = moneyAmountInput.value;
    //moneyAmountP.innerText = `Ditt saldo är: ${counter} kr`;
  moneyAmountInput = "";
  })
}
createFormMoneyInput();
const testList = 
   [
    {
      "id": "ribs-brisket-and-burnt-ends",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Joe's KC BBQ",
      "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
      "price": 110.99,
      "rate": 4,
      "country": "Kansas City, KS"
    },
    {
      "id": "005-kings-carolina-oink-sampler",
      "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      "name": "Kings BBQ",
      "dsc": "Carolina BBQ Oink Sampler",
      "price": 89,
      "rate": 4,
      "country": "Kinston, NC"
    }]
//this function takes the text of p2 , it accepts an array, an array of the fooods and drinkt that
//the costumer orders. The function add the prices togehter and then substract it 
//from the amount of the p2 tag and gives it the new value.
function updateSpendMoneyDisplay(arr) {
  moneyP = document.querySelector('.moneyP')
  let counter = moneyP.innerText;
  console.log(parseInt(counter))
 
 
  console.log(counter)
  let newCounterArr = arr.map(function(element){
    return element.price;
    
  })
  console.log(newCounterArr);
  //return newCounterArr;
  let sum = 0;
  for (let item of newCounterArr){
  sum += item;
}
console.log(sum);
moneyP.innerText = (parseInt(counter)) - sum;
 return (parseInt(counter)) - sum;
}



//starts when opening site
openHighlightsMenu();

updateSpendMoneyDisplay()