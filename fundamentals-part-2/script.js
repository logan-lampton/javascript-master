"use strict";
// strict mode, must be at the top of the document to be used

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