let userName = window.prompt("Please enter your name.");
let greetingParagraph = document.getElementById("greeting");
greetingParagraph.innerHTML += ", " + userName + "!";

// input two numbers
let num1 = parseInt(window.prompt("Enter first number."));
let num2 = parseInt(window.prompt("Enter another number."));

// display these numbers corresponding to their operand id's
let op1 = document.getElementById("operand1");
let op2 = document.getElementById("operand2");

// make changes to innerhtml
op1.innerHTML += num1;
op2.innerHTML += num2;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let divisionResult = num1 / num2;
let modResult = num1 % num2;

// modify statements of results
document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 + " is : " + sum;
document.getElementById("subtraction").innerHTML = "The difference of " + num1 + " and " + num2 + " is : " + difference;
document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 + " is : " + product;
document.getElementById("division").innerHTML = "The division of " + num1 + " and " + num2 + " is : " + divisionResult;
document.getElementById("modulus").innerHTML = "The mod of " + num1 + " and " + num2 + " is : " + modResult;

