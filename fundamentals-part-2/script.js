"use strict";
// strict mode, must be at the top of the document to be used

// My time remaining function
function remainingStudyTime(remainingTime, lessonTime) {
  const beforeSpedUp = remainingTime - lessonTime;
  console.log(beforeSpedUp);
  const spedUp = beforeSpedUp / 1.5;
  console.log(spedUp);
  return spedUp / 60;
}
const timeTilParty = `Party in ${remainingStudyTime(63, 22)} hours, friends!`;
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
// console.log(friends);

// can also use new Array() to create an array
const years = new Array(1988, 1991, 1996);
// console.log(years);

// // syntax to call a specific element from the array
// console.log(friends[0]);
// // syntax to show the number of elements in the array
// console.log(friends.length);
// // to grab the last element in the array, no matter the length
// console.log(friends[friends.length - 1]);

// // to change a value in the array
// friends[2] = "Jay";
// console.log(friends);
// array can be mutated, be we can't replace the entire array

// const firstName = "Jonas";
// // arrays can contain variables and even other arrays
// const jonas = [firstName, "Schmedtmann", 2023 - 1991, "teacher", friends];
// console.log(jonas);

const calcNewAge = function (birthYear) {
  return 2023 - birthYear;
};
const yearsNewAge = [1990, 1967, 2002, 2010, 2018];

const yearsAge1 = calcNewAge(yearsNewAge[0]);
const yearsAge2 = calcNewAge(yearsNewAge[1]);
const yearsAge3 = calcNewAge(yearsNewAge[2]);
console.log(yearsAge1, yearsAge2, yearsAge3);

// We can place function calls inside of an array
const updatedAges = [
  calcNewAge(yearsNewAge[0]),
  calcNewAge(yearsNewAge[1]),
  calcNewAge(yearsNewAge[yearsNewAge.length - 1]),
];
console.log(updatedAges);
// ----------------------------------------------------------------------------

// Basic Array Operations (Methods)
// friends array within this doc: const friends = ["Michael", "Steven", "Peter"];
// .push to add to the end
friends.push("Jay");
// .unshift to add to the front
friends.unshift("John");
// pop removes the last element
const popped = friends.pop();
// if you save the .pop as a variable, it will return the element that you popped
console.log(popped);
// .shift removes the first element in the array
console.log(friends);
// you can return the index of the element in the array like so:
console.log(friends.indexOf("Debra"));
// if you ask for an indexOf something not in the array the result is -1
// .includes returns either true or false depending on if the element is in the array; uses strict equality
console.log(friends.includes("Steven"));

if (friends.includes("Peter")) {
  console.log(`You have a friend named Peter!`);
}
// ----------------------------------------------------------------------------

// Objects
// key : value pairs allow us to grab data in an object much faster
// Below is an object literal; literally making the object
const jonasInstructor = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2023 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
// Unlike arrays, the order of data in an object doesn't matter
// ----------------------------------------------------------------------------

// Dot vs. Bracket Notation
// Dot notation
// console.log(jonasInstructor.firstName);

// Bracket notation
// console.log(jonasInstructor["lastName"]);
// Bracket notation can include any expression
const nameKey = "Name";
// console.log(jonasInstructor["first" + nameKey]);
// // results in Jonas
// console.log(jonasInstructor["last" + nameKey]);
// results in Schmedtmann
// If you don't need to add an logical expression; dot notation is cleaner

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// the console.log below will display the result the user typed into the interestedIn prompt

jonasInstructor.location = "Portugal";
jonasInstructor["Twitter"] = "@jonastwitter";

// Below shows the result if it exists in the object ('true'); if it doesn't exist ('false'), we display the second console.log
// if (jonasInstructor[interestedIn]) {
//   console.log(jonasInstructor[interestedIn]);
// } else {
//   console.log("Please select one of the options provided");
// }

console.log(
  `${jonasInstructor.firstName} has ${jonasInstructor.friends.length} friends, and his best friend is named ${jonasInstructor.friends[0]}`
);

// ----------------------------------------------------------------------------

// Object Methods
// can add a function to an object in the syntax of calcAge below
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year-old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
// the 'this' in the function, refers to the entire jonas object
// this.age would create a new key called 'age', with the value of the calculation of 2023 - this.birthYear
// jonas.age = 1;
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummary());
// ----------------------------------------------------------------------------

// Iteration: The for Loop
// the for loop keeps running while the condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  // console.log(`Lifting weights repetition ${rep} 🏋️`);
}
// for loops keep your code DRY!
// ----------------------------------------------------------------------------

// Looping Arrays, Breaking and Continuing
const newJonas = [
  "Jonas",
  "Schmedtmann",
  2023 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];

// arrays are 0 based, so we will start on index of 0
// the code below works with an ARRAY, not a key value pair object
for (let i = 0; i < newJonas.length - 1; i++) {
  console.log(newJonas[i]);
  types[i] = typeof newJonas[i];
  console.log(types);
  types.push(typeof newJonas[i]);
}
console.log(types);

const yearsArray = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i <= yearsArray.length - 1; i++) {
  let age = 2023 - yearsArray[i];
  ages.push(age);
};
console.log(ages);

// continue and break
// continue will have the code CONTINUE only when certain states are met and skip the rest
for(let i = 0; i < newJonas.length; i++) {
  if(typeof newJonas[i] !=="string") continue;
  console.log(newJonas[i], typeof newJonas[i])
};
// BREAK stops the code once certain code runs
console.log("BREAK WITH NUMBER")
for(let i = 0; i < newJonas.length; i++) {
  if(typeof newJonas[i] === "number") break;
  console.log(newJonas[i], typeof newJonas[i])
};
// ----------------------------------------------------------------------------

// Looping Backwards and Loops in Loops
// looping backwards
for(let i = newJonas.length -1; i >= 0; i--) {
  console.log(i, newJonas[i]);
};

// a loop inside of a loop
for(let exercise = 1; exercise < 4; exercise++) {
  console.log(`--Starting exercise ${exercise}.`);

  for(let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️`)
  };
};

// ----------------------------------------------------------------------------

// The while Loop
