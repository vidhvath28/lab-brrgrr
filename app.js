// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
var Button = document.querySelector(".button-container")

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll(){
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  // renderIngredientsBoard();
  renderPrice();
}

function renderPatty(){
  let patty = document.getElementById("patty");
  //you can also use getElementById
  if(state.Patty){
    patty.style.display = "inherit";
  } 
  else{
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese")
  if(state.Cheese){
    cheese.style.display = "inherit";
  }
  else{
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoe = document.getElementById("tomato")
  if(state.Tomatoes){
    tomatoe.style.display = "inherit";
  }
  else{
    tomatoe.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");
  if(state.Onions){
    onion.style.display = "inherit";
  }
  else{
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce")
  if(state.Lettuce){
    lettuce.style.display = "inherit";
  }
  else{
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function(){
  state.Patty = !state.Patty;
  PricePatty();
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function(){
  state.Cheese = !state.Cheese;
  PriceCheese();
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function(){
  state.Tomatoes = !state.Tomatoes;
  PriceTomatoes();
  renderAll();
}

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function(){
  state.Onions = !state.Onions;
  PriceOnions();
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function(){
  state.Lettuce = !state.Lettuce;
  PriceLettuce();
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  PopPatty();
  PopCheese();
  PopLettuce();
  PopOnion();
  PopTomatoes();
}

function PopPatty(){
  if(state.Patty){
    document.querySelector(".btn-patty").style.backgroundColor = "green";
    document.querySelector(".items1").innerHTML = "Patty";
  }
  else{
    document.querySelector(".btn-patty").style.backgroundColor = "#ffd058";
    document.querySelector(".items1").innerHTML = "";
  }
}

function PopTomatoes(){
  if(state.Tomatoes){
    document.querySelector(".btn-tomatoes").style.backgroundColor = "green";
    document.querySelector(".items2").innerHTML = "Tomato";
  }
  else{
    document.querySelector(".btn-tomatoes").style.backgroundColor = "#ffd058";
    document.querySelector(".items2").innerHTML = "";
  }
}

function PopCheese(){
  if(state.Cheese){
    document.querySelector(".btn-cheese").style.backgroundColor = "green";
    document.querySelector(".items3").innerHTML = "Cheese";
  }
  else{
    document.querySelector(".btn-cheese").style.backgroundColor = "#ffd058";
    document.querySelector(".items3").innerHTML = "";
  }
}

function PopOnion(){
  if(state.Onions){
    document.querySelector(".btn-onions").style.backgroundColor = "green";
    document.querySelector(".items4").innerHTML = "Onion";
  }
  else{
    document.querySelector(".btn-onions").style.backgroundColor = "#ffd058";
    document.querySelector(".items4").innerHTML = "";
  }
}

function PopLettuce(){
  if(state.Lettuce){
    document.querySelector(".btn-lettuce").style.backgroundColor = "green";
    document.querySelector(".items5").innerHTML = "Lettuce";
  }
  else{
    document.querySelector(".btn-lettuce").style.backgroundColor = "#ffd058";
    document.querySelector(".items5").innerHTML = "";
  }
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
//  Rendered already in the previous challenge

//Judgement 1
//In the p element having price-details as the class, display the calculated price based on ingredients.
var Costs = 0;
function renderPrice(){
  document.querySelector(".TotalCost").innerHTML = Costs + wholeWheatBun;
}

function PricePatty(){
  if(state.Patty){
    Costs+=ingredients.Patty;
  }
  else{
    if(!state.Patty){
      Costs-=ingredients.Patty;
    }
  }
}

function PriceTomatoes(){
  if(state.Tomatoes){
    Costs+=ingredients.Tomatoes;
  }
  else{
    if(!state.Tomatoes){
      Costs-=ingredients.Tomatoes;
    }
  }
}

function PriceOnions(){
  if(state.Onions){
    Costs+=ingredients.Onions;
  }
  else{
    if(!state.Onions){
      Costs-=ingredients.Onions;
    }
  }
}

function PriceCheese(){
  if(state.Cheese){
    Costs+=ingredients.Cheese;
  }
  else{
    if(!state.Cheese){
      Costs-=ingredients.Cheese;
    }
  }
}

function PriceLettuce(){
  if(state.Lettuce){
    Costs+=ingredients.Lettuce;
  }
  else{
    if(!state.Lettuce){
      Costs-=ingredients.Lettuce;
    }
  }
}
