"use strict";
// strict mode, must be at the top of the document to be used

// My time remaining function
function remainingStudyTime(remainingTime, lessonTime) {
  const beforeSpedUp = remainingTime - lessonTime;
  console.log(beforeSpedUp);
  const spedUp = beforeSpedUp / 1.5;
  return spedUp / 60;
}
const timeTilParty = `Party in ${remainingStudyTime(178, 22)} hours, friends!`;
console.log(timeTilParty);
// ----------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------

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
// ----------------------------------------------------------------------------

// Functions Review
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
// ----------------------------------------------------------------------------

// Introduction to Arrays
// most common way to create an array; called the literal syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// can also use new Array() to create an array
const years = new Array(1988, 1991, 1996);
console.log(years);

// syntax to call a specific element from the array
console.log(friends[0]);
// syntax to show the number of elements in the array
console.log(friends.length);
// to grab the last element in the array, no matter the length
console.log(friends[friends.length - 1]);

// to change a value in the array
friends[2] = "Jay";
console.log(friends);
// array can be mutated, be we can't replace the entire array

const firstName = "Jonas";
// arrays can contain variables and even other arrays
const jonas = [firstName, "Schmedtmann", 2023 - 1991, "teacher", friends];
console.log(jonas);

const calcNewAge = function (birthYear) {
    return 2023 - birthYear;
};
const yearsNewAge = [1990, 1967, 2002, 2010, 2018];

const yearsAge1 = calcNewAge(yearsNewAge[0]);
const yearsAge2 = calcNewAge(yearsNewAge[1]);
const yearsAge3 = calcNewAge(yearsNewAge[2]);
console.log(yearsAge1, yearsAge2, yearsAge3);

// We can place function calls inside of an array
const updatedAges = [calcNewAge(yearsNewAge[0]), calcNewAge(yearsNewAge[1]), calcNewAge(yearsNewAge[yearsNewAge.length - 1])];
console.log(updatedAges);

// ----------------------------------------------------------------------------
