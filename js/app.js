'use-strict';

//Set up variables to be used later
Products.allProducts = [];  //array for products
Products.display = [];  //array to keep track of products as they are displayed
Products.totalClick = 0;  //counter to keep track of clicks

var productNames = [];  //array to house product names
var productVote = 0;  //counter to keep track of votes for specific product

//Access items from the DOM for each of the three image locations
var imgElementOne = document.getElementById('product-pic-one');
var imgElementTwo = document.getElementById('product-pic-two');
var imgElementThree = document.getElementById('product-pic-three');

var sectionElement = document.getElementById('product-selection');

//Create constructor for Products
function Products(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.displayCount = 0;
  this.productVotes = 0;
  Products.allProducts.push(this);
  productNames.push(this.name);
}
//Add instances of products.
new Products('suitcase', 'img/bag.jpg');
new Products('banana slicer', 'img/banana.jpg');
new Products('iPad toiletpaper stand', 'img/bathroom.jpg');
new Products('rain boots', 'img/boots.jpg');
new Products('breakfast appliance', 'img/breakfast.jpg');
new Products('meatball gum', 'img/bubblegum.jpg');
new Products('chai', 'img/chair.jpg');
new Products('cthulhu', 'img/cthulhu.jpg');
new Products('duck beak for dog', 'img/dog-duck.jpg');
new Products('dragon meat', 'img/dragon.jpg');
new Products('silverware pen', 'img/pen.jpg');
new Products('sweeper for pet feet', 'img/pet-sweep.jpg');
new Products('pizza sissors', 'img/scissors.jpg');
new Products('shark sleeping bag', 'img/shark.jpg');
new Products('baby sweeper','img/sweep.png');
new Products('tauntaun sleeping bag', 'img/tauntaun.jpg');
new Products('unicorn meat', 'img/unicorn.jpg');
new Products('usb', 'img/usb.gif');
new Products('watering can', 'img/water-can.jpg');
new Products('wine glass', 'img/wine-glass.jpg');

//Randomly display pictures of products
var randomNumberOne = Math.floor(Math.random() * Products.allProducts.length);
var randomNumberTwo = Math.floor(Math.random() * Products.allProducts.length);
var randomNumberThree = Math.floor(Math.random() * Products.allProducts.length);

//Check for dups, rerun the numbers if dups are found.
while(randomNumberOne === randomNumberTwo || randomNumberTwo === randomNumberThree || randomNumberOne === randomNumberThree){

//|| Products.lastDisplay.includes(randomNumberOne) || Products.lastDisplay.includes//(randomNumberTwo) || Products.lastDisplay.includes(randomNumberThree)) {
  console.log('dup caught');
  randomNumberOne = Math.floor(Math.random() * Products.allProducts.length);
  randomNumberTwo = Math.floor(Math.random() * Products.allProducts.length);
  randomNumberThree = Math.floor(Math.random() * Products.allProducts.length);
}
//add images to page
imgElementOne.src = Products.allProducts[randomNumberOne].filepath;
imgElementTwo.src = Products.allProducts[randomNumberTwo].filepath;
imgElementThree.src = Products.allProducts[randomNumberThree].filepath;

//keep track of images displayed in previous group of three
//Products.lastDisplay = [];
//Products.lastDisplay[0] = (randomNumberOne);
//Products.lastDisplay[1] = (randomNumberTwo);
//Products.lastDisplay[2] = (randomNumberThree);

//Increment counters for products that were displayed
Products.allProducts[randomNumberOne].displayCount++;
Products.allProducts[randomNumberTwo].displayCount++;
Products.allProducts[randomNumberThree].displayCount++;


//imgElementOne.addEventListener('click', randomProduct);







/*
//Set up array to house all the products
var allProducts = [];



//Add the event listener
var imgElementOne = document.getElementById('product-pic-one');
imgElementOne.addEventListener('click', randomProduct);

var imgElementTwo = document.getElementById('product-pic-two');
imgElementTwo.addEventListener('click', randomProduct);

var imgElementThree = document.getElementById('product-pic-three');
imgElementThree.addEventListener('click', randomProduct);

function randomProduct() {
  var currentProduct = [];
  var randomNumberOne = Math.floor(Math.random() * allProducts.length);
  imgElementOne.src = allProducts[randomNumberOne].filepath;
  currentProduct.push(randomNumberOne);

  var randomNumberTwo = Math.floor(Math.random() * allProducts.length);
  if (randomNumberTwo === randomNumberOne){
    randomNumberTwo = Math.floor(Math.random() * allProducts.length);
  } else {
    imgElementTwo.src = allProducts[randomNumberTwo].filepath;
    currentProduct.push(randomNumberTwo);
  }

  var randomNumberThree = Math.floor(Math.random() * allProducts.length);
  if(randomNumberThree === randomNumberOne) {
    randomNumberThree = Math.floor(Math.random() * allProducts.length);
  } else if(randomNumberThree === randomNumberTwo) {
    randomNumberThree = Math.floor(Math.random() * allProducts.length);
  } else {
    imgElementThree.src = allProducts[randomNumberThree].filepath;
    currentProduct.push(randomNumberTwo);
  }
}
randomProduct();

click handler calls random product
*/