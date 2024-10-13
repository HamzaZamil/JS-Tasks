"use strict";
//...Arrays...
//...1...
let array = ["Coding", "Academy", "By", "Orange"];

let arrayWithJordan = [...array, "Jordan"];
console.log(arrayWithJordan);

let firstTwoElements = array.slice(0, 2);
console.log(firstTwoElements);

let arrayWithWelcome = ["Welcome", "To", ...array];
console.log(arrayWithWelcome);

let excludeFirstElement = array.slice(1);
console.log(excludeFirstElement);

let arrayAsString = array.join(" ");
console.log(arrayAsString);

console.log(array);

let codingAndOrange = [array[0], array[array.length - 1]];
console.log(codingAndOrange);
//...2...
//...A...
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
console.log(vegetables);
//.......B........
var fruit = ["banana", "apple", "orange", "watermelon"];
fruit.shift();
console.log(fruit);
//........C.........
var fruit = ["apple", "orange", "watermelon"];
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex, "is index of orange");
//........D.........
var fruit = ["apple", "orange", "watermelon"];
var orangeIndex = fruit.indexOf("orange");
fruit.push(orangeIndex);
console.log(fruit);
//.......E..........
var vegetables = ["carrot", "tomato", "pepper"];
var vegetableLength = vegetables.length;
console.log(vegetableLength, "is length of the vegetable array");
//........F.........
var vegetables = ["carrot", "tomato", "pepper"];
var vegetableLength = vegetables.length;
vegetables.push(vegetableLength);
console.log(vegetables);
//........G.........
var fruit = ["apple", "orange", "watermelon", 1];
var vegetables = ["carrot", "tomato", "pepper", 3];
var food = fruit.concat(vegetables);
console.log(food);
//........H.........
var food = [
  "apple",
  "orange",
  "watermelon",
  1,
  "carrot",
  "tomato",
  "pepper",
  3,
];
food.splice(4, 2);
console.log(food);
//........I.........
var food = ["apple", "orange", "watermelon", 1, "pepper", 3];
food.reverse();
console.log(food);
//.......J..........
var food = [3, "pepper", 1, "watermelon", "orange", "apple"];
var foodString = food.join(", ");
console.log(foodString);
