'use-strict';

//Set up array to house all the products
var allProducts = [];

//Create object constructor to create product instances
function Products(filepath) {
  this.filepath = filepath;
  allProducts.push(this);
}

//Use constructor to add instances of products.
new Products('img/bag.jpg');
new Products('img/banana.jpg');
new Products('img/bathroom.jpg');
new Products('img/boots.jpg');
new Products('img/breakfast.jpg');
new Products('img/bubblegum.jpg');
new Products('img/chair.jpg');
new Products('img/cthulhu.jpg');
new Products('img/dog-duck.jpg');
new Products('img/dragon.jpg');
new Products('img/pen.jpg');
new Products('img/pet-sweep.jpg');

//Add the event listener
var imgElementOne = document.getElementById('product-pic-one');
imgElementOne.addEventListener('click', randomProduct);

var imgElementTwo = document.getElementById('product-pic-two');
imgElementTwo.addEventListener('click', randomProduct);

var imgElementThree = document.getElementById('product-pic-three');
imgElementThree.addEventListener('click', randomProduct);

function randomProduct() {
  var randomNumberOne = Math.floor(Math.random() * allProducts.length);
  imgElementOne.src = allProducts[randomNumberOne].filepath;
  console.log(randomNumberOne);

  var randomNumberTwo = Math.floor(Math.random() * allProducts.length);
  console.log(randomNumberTwo);
  if (randomNumberTwo === randomNumberOne){
    randomNumberTwo = Math.floor(Math.random() * allProducts.length);
  } else {
    imgElementTwo.src = allProducts[randomNumberTwo].filepath;
  }
  //console.log(randomNumberTwo);

  var randomNumberThree = Math.floor(Math.random() * allProducts.length);
  if(randomNumberThree === randomNumberOne) {
    randomNumberThree = Math.floor(Math.random() * allProducts.length);
  } else if(randomNumberThree === randomNumberTwo) {
    randomNumberThree = Math.floor(Math.random() * allProducts.length);
  } else {
    imgElementThree.src = allProducts[randomNumberThree].filepath;
  }
  console.log(randomNumberThree);
}

randomProduct();



