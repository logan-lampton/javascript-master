// Values and Variables
//a value is the smallest unit in JS
// 4 + 56 + 100 are three values that are combined by mathmatical operators to make one value
// 'Logan' is a value

let js = "amazing";
// js is a variable assigned to the value 'amazing'

// Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined (not yet defined)
// 5. Null (it IS NOT an object)
// 6. Symbol
// 7. BigInt (larger integers than the number type can hold)

// JS has dynamic typing - you do NOT have to manually define the data type; value has type, not the variable
// console.log(typeof 456) returns number
// if you don't assign a value to a variable, it will have the type of undefined

// let, const and var
let age = 30;
age = 31;
// a const value, can NOT be reassigned
const birthYear = 1988;
// const requires an initial value
// always use const, unless you know that the variable will change to limit variable mutations and reduce bugs
// DON'T USE VAR; just understand it

// Basic Operators
// includes all mathematic operators
// 2 ** 3 is 2 to the power of 3
// + can be used to concatonate strings
const firstName = "Logan";
const lastName = "Lampton";
// console.log(firstName + " " + lastName);

// assignment operators include =
// += adds the number to the current total
// math operators are completed before comparison operators (in general)

// you can declare two empty values in one line
//  let x, y;
// assigment operators are run from RIGHT to left
let x = (y = 25 - 10 - 5);
// that equals x = 10; y = 10

// Strings and Template Literals
const job = "software engineer";
const year = 2023;
const logan =
  "I'm " + firstName + ", a " + (year - birthYear) + " year-old " + job;
// console.log(logan);
// template literals are way better (and newer than) concatonating
const loganBetter = `I'm ${firstName}, a ${year - birthYear} year-old ${job}`;
// can make multi-line strings with backticks
console.log(`String
with
multiple
lines`);

// If/Else Statements
// a control structure
const drivingAge = 15;
if (drivingAge >= 16) {
//   console.log(`Apply for a driver's license!`);
} else {
//   console.log(
//     `Sorry, you have to be at least 16 years old. Please apply in ${
//       16 - drivingAge
//     } years.`
//   );
}

const yearBorn = 1991;
let century;
if (yearBorn <= 2000) {
  century = 20;
} else {
  century = 21;
}
// console.log(century);

// Type Conversion and Coercion
const inputYear = "1989";
// console.log(Number(inputYear) + 18);

// Number() can make a string of numbers in a number value
// String() can make numbers into a string

// Truthy and Falsy Values
// There are only 5 falsy values:
// 0
// ''
// undefined
// null
// NaN

const money = 0;
if (money) {
//   console.log("Don't spend it all!");
} else {
//   console.log("Get a job!");
}
// 0 is converted to false

let height;
if (height) {
//   console.log("Yay! Height is defined!");
} else {
//   console.log("Height is undefined");
}

// Equality Operators: == vs. ===

// === is the strict equality operator
//  == is the loose equality operator and it makes type coercion
const myAge = "18";
// strict
if (myAge === 18) {
//   console.log("You're now an adult!");
}
// loose
if (myAge == 18) {
//   console.log("You're now an adult!");
}
// YOU SHOULD ALWAYS USE THE STRICT EQUALITY OPERATOR to avoid bugs

// const favorite = prompt("What's your favorite number?");
// if(favorite == 23){
//     console.log("Cool! 23 is a great number!")
// };

// Boolean Logic
// CS boolean logic is the same for all programing languages
// EX: Sarah has a driver's license AND good vision
// AND requires both variables to be true
// EX: Sarah has a driver's license OR good vision
// OR is true even if just one variable is true

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = false;
// hasDriversLicense && hasGoodVision = false;
// hasDriversLicense || hasGoodVision = true;
// !hasDriversLicense = false;
const isTired = false;

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
//   console.log("Sarah should drive");
} else {
//   console.log("...Someone else should drive");
}

// The Switch Statement
const day = "Monkeyday";

switch (day) {
  case "Monday":
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Study algorithms");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Deep dive into JavaScript");
    break;
  case "Friday":
    console.log("Apply to a job");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend! ...but still code");
    break;
  default:
    console.log("Please add a valid day of the week");
}
// Without the break, the code continues running, so you NEED to add breaks
// Strict comparison

// same logic as an if/else statement
if (day === "Monday") {
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Study algorithms");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Deep dive into JavaScript");
} else if (day === "Friday") {
  console.log("Apply to a job");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend! ...but still code");
} else {
  console.log("Please add a valid day of the week");
}
