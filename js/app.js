'use-strict';

//Set up variables to be used later
Products.allProducts = [];
Products.display = [];
Products.totalClick = 0;

var productNames = [];
var productVote = [];

//Access items from the DOM for each of the three image locations
var imgElementOne = document.getElementById('product-pic-one');
var imgElementTwo = document.getElementById('product-pic-two');
var imgElementThree = document.getElementById('product-pic-three');

var sectionElement = document.getElementById('product-section');

//Create constructor for Products
function Products(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.displayCount = 0;
  this.vote = 0;
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
function randomProduct() {
  var randomNumberOne = Math.floor(Math.random() * Products.allProducts.length);
  var randomNumberTwo = Math.floor(Math.random() * Products.allProducts.length);
  var randomNumberThree = Math.floor(Math.random() * Products.allProducts.length);

  //Check for dups, rerun the numbers if dups are found.
  while(randomNumberOne === randomNumberTwo || randomNumberTwo === randomNumberThree || randomNumberOne === randomNumberThree || Products.display.includes(randomNumberOne) || Products.display.includes(randomNumberTwo) || Products.display.includes(randomNumberThree)){

    console.log('dup caught');
    randomNumberOne = Math.floor(Math.random() * Products.allProducts.length);
    randomNumberTwo = Math.floor(Math.random() * Products.allProducts.length);
    randomNumberThree = Math.floor(Math.random() * Products.allProducts.length);
  }
  //add images to page
  imgElementOne.src = Products.allProducts[randomNumberOne].filepath;
  imgElementOne.alt = Products.allProducts[randomNumberOne].name;

  imgElementTwo.src = Products.allProducts[randomNumberTwo].filepath;
  imgElementTwo.alt = Products.allProducts[randomNumberTwo].name;

  imgElementThree.src = Products.allProducts[randomNumberThree].filepath;
  imgElementThree.alt = Products.allProducts[randomNumberThree].name;

  //keep track of images displayed in previous group of three
  Products.display = [];
  Products.display[0] = randomNumberOne;
  Products.display[1] = randomNumberTwo;
  Products.display[2] = randomNumberThree;

  //Increment counters for products that were displayed
  Products.allProducts[randomNumberOne].displayCount++;
  Products.allProducts[randomNumberTwo].displayCount++;
  Products.allProducts[randomNumberThree].displayCount++;
}

sectionElement.addEventListener('click', personClick);

//Function for clicking on images
function personClick(event) {
  Products.totalClick++;
  console.log(event.target.alt);

  //Loop through to determine which image was clicked
  for(var i in Products.allProducts) {
    if(event.target.alt === Products.allProducts[i].name) {
      Products.allProducts[i].vote++;}
  }

  if (Products.totalClick > 4) {
    sectionElement.removeEventListener('click', personClick);
    //  showResults();
    renderChart();
  } else {
    randomProduct();
  }
}
function updateVotes() {
  for(var i in Products.allProducts); 
    productVote.push(Products.allProducts.vote);
    console.log(productVote);
  }
}
/*
    productVote[i] = Products.allProducts[i].vote;
  }
}

randomProduct();
updateVotes();

//Add the chart with js charts
function renderChart() {
  var context = document.getElementById('product-chart').getContext('2d');

  var arrayOfColors = ['red', 'orange', 'yellow','green', 'blue', 'red', 'orange', 'yellow','green', 'blue', 'red', 'orange', 'yellow','green', 'blue', 'red', 'orange', 'yellow','green', 'blue', 'red', 'orange', 'yellow','green', 'blue',];

  new Chart(context, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Votes per Item',
        data: productVote,
        backgroundColor: arrayOfColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

