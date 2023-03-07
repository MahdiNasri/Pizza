var totalToppings = 0;
var top = 10;
var total = 0;

// mushroom

$("#c1").on("click ", function () {
  array.push(toppings[0].topping, toppings[0].cost + " TND");
  $("#mushroom").toggle(1000);
  totalToppings = totalToppings + toppings[0].cost;
  total = top + totalToppings 
  calculate(top, totalToppings, total);
});

// onion

$("#c2").on("click ", function () {
  array.push(toppings[1].topping, toppings[1].cost + " TND");
  $("#onion").toggle(1000);
  totalToppings =  totalToppings + toppings[1].cost;
  total = top + totalToppings 
  calculate(top, totalToppings, total);
});

//paneer

$("#c3").on("click ", function () {
  array.push(toppings[2].topping, toppings[2].cost + " TND");
  $("#paneer").toggle(1000);
  totalToppings = totalToppings + toppings[2].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});

//paparika

$("#c4").on("click ", function () {
  array.push(toppings[3].topping, toppings[3].cost + " TND");
  $("#paparika").toggle(1000);
  totalToppings = totalToppings + toppings[3].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});

//jalapeno

$("#c5").on("click ", function () {
  array.push(toppings[4].topping, toppings[4].cost + " TND");
  $("#jalapeno").toggle(1000);
  totalToppings = totalToppings + toppings[4].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});

//green-olives

$("#c6").on("click ", function () {
  array.push(toppings[5].topping, toppings[5].cost + " TND");
  $("#green-olives").toggle(1000);
  totalToppings = totalToppings + toppings[5].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});

//golden-corn

$("#c7").on("click ", function () {
  array.push(toppings[6].topping, toppings[6].cost + " TND");
  $("#golden-corn").toggle(1000);
  totalToppings = totalToppings + toppings[6].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});

//capsicum

$("#c8").on("click ", function () {
  array.push(toppings[7].topping, toppings[7].cost + " TND");
  $("#capsicum").toggle(1000);
  totalToppings = totalToppings + toppings[7].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});

//peri-peri-chicken

$("#c9").on("click ", function () {
  array.push(toppings[8].topping, toppings[8].cost + " TND");
  $("#peri-peri-chicken").toggle(1000);
  totalToppings = totalToppings + toppings[8].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});


//barbeque

$("#c10").on("click ", function () {
  array.push(toppings[9].topping, toppings[9].cost + " TND");
  $("#barbeque").toggle(1000);
  totalToppings = totalToppings + toppings[9].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});


//sausage

$("#c11").on("click ", function () {
  array.push(toppings[10].topping, toppings[10].cost + " TND");
  $("#sausage").toggle(1000);
  totalToppings = totalToppings + toppings[10].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});

//chicken-tikka

$("#c12").on("click ", function () {
  array.push(toppings[11].topping, toppings[11].cost + " TND");
  $("#chicken-tikka").toggle(1000);
  totalToppings = totalToppings + toppings[11].cost;
  total = top + totalToppings
  console.log(top);
});

//grilled-chicken-rasher

$("#c13").on("click ", function () {
  array.push(toppings[12].topping, toppings[12].cost + " TND");
  $("#grilled-chicken-rasher").toggle(1000);
  totalToppings = totalToppings + toppings[12].cost;
  total = top + totalToppings
  calculate(top, totalToppings, total);
});


// extra cheese checked

$("#extra-cheese").on("click ", function () {
  var isChecked = $("#extra-cheese")[0].checked;
  if (!isChecked) {

    total -= extraCheese;
    extraCheese -= 15;

    $(".extra-cheese").empty();
    $(".extra-cheese").append(`<span class="bill-label">Extra Cheese:</span>
                      <span class="bill-value" id="cheese-cost">${extraCheese} TND </span>`);
    $("#grand-total").empty();
    $("#grand-total").append(`<span class="bill-label">Grand Total:</span>
                      <span class="bill-value" id="grand-cost">${total} TND</span>`);
  }
  if (isChecked) {
    extraCheese += 15;
    total += extraCheese;
    $(".extra-cheese").empty();
    $(".extra-cheese").append(`<span class="bill-label">Extra Cheese:</span>
                      <span class="bill-value" id="cheese-cost">${extraCheese} TND </span>`);
    $("#grand-total").empty();
    $("#grand-total").append(`<span class="bill-label">Grand Total:</span>
                      <span class="bill-value" id="grand-cost">${total} TND</span>`);
  }
});

// options choice

$("#quantity").on("click ", function () {
  var value = $("#quantity option:selected").val();
  console.log(value);
  if (value) {
    total *= value;
    $("#grand-total").empty();
    $("#grand-total").append(`<span class="bill-label">Grand Total:</span>
      <span class="bill-value" id="grand-cost">${total} TND</span>`);
  }
});


// add topping toggle after 1s

$(document).ready(function () {
$(".toppings-genre").on("click ", function () {
  $(".toppings-body-non").toggle(1000);
  $(".toppings-body-veg").toggle(1000);
});
});

var toppings = [
{
  topping: "mushroom",
  cost: 1 ,
},

{
  topping: "onion",
  cost: 1 ,
},

{ topping: "paneer", 
  cost: 1 },

{
  topping: "paparika",
  cost: 1 ,
},

{
  topping: "jalapeno",
  cost: 1 ,
},

{
  topping: "green-olives",
  cost: 1 ,
},

{
  topping: "golden-corn",
  cost: 1 ,
},

{
  topping: "capsicum",
  cost: 1 ,
},

{
  topping: "peri-peri-chicken",
  cost: 3 ,
},

{
  topping: "barbeque",
  cost: 3 ,
},

{
  topping: "sausage",
  cost: 3 ,
},

{
  topping: "chicken-tikka",
  cost: 3 ,
},

{
  topping: "grilled-chicken-rasher",
  cost: 3 ,
},
];