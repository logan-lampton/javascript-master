"use strict";
// strict mode, must be at the top of the document to be used

// My time remaining function
function remainingStudyTime(remainingTime, lessonTime) {
  const beforeSpedUp = remainingTime - lessonTime;
  const spedUp = beforeSpedUp / 1.5;
  return spedUp / 60;
}
const timeTilParty = `Party in ${remainingStudyTime(243, 11)} hours, friends!`;
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
console.log(age1, age2);
