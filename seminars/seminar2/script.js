// import calculateResultSum from "./calc.js";
const calculateResultSum = require("./calc.js");
require("colors");

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

const text = "Общая стоимость покупок: " + total + "рублей";

console.log(total > 50 ? text.red : text.green);
