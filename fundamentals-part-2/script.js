"use strict";
// strict mode, must be at the top of the document to be used

// My time remaining function
function remainingStudyTime(remainingTime, lessonTime) {
  const beforeSpedUp = remainingTime - lessonTime;
  console.log(beforeSpedUp);
  const spedUp = beforeSpedUp / 1.5;
  return spedUp / 60;
}
const timeTilParty = `Party in ${remainingStudyTime(212, 16)} hours, friends!`;
console.log(timeTilParty);

// Functions
function logger() {
  console.log("My name is Logan");
}
// calling, running, invoking the function - all mean "to run the function"
logger();

// functions are like machines; they can process and change things
// () two arguements in the function below
function fruitProcessor(apples, oranges) {
  const juice = `The juice includes ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(3, 5);
// capture it, we need to save the result of the function to a variable
console.log(appleJuice);

// be DRY - "Don't Repeat Yourself"

// Function Declarations vs. Expressions
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1988);

// anonomyous function example
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
// a function is a value, so we can store it as a variable
const age2 = calcAge2(1996);

// Arrow Function
// implicit return
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1992);
console.log(age1, age2, age3);

// even with an arrow function, we need to write return if the code block is more than one line
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} can retire in ${retirement} years`;
};
// console.log(yearsUntilRetirement(1988, "Logan"));

// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `The juice includes ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

const appleAndOrangeJuice = fruitProcessor2(2, 3);
console.log(appleAndOrangeJuice);

// Introduction to Arrays
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
// The return statement automatically exits the function, so ignores anything after it!
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} can retire in ${retirement} years`;
  } else {
    return "Hey, you should retire right now!";
  }
};
console.log(yearsUntilRetirement2(1988, "Logan"));
