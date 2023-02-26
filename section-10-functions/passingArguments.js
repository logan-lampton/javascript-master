'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr ${passenger.name}`;

  if (passenger.passport === 24739479284) {
    alert('Check in please');
  } else {
    alert('Wrong passport number entered');
  }
};

checkIn(flight, jonas);
// Since flightNum is a copy of the primative value of flight, the updated flightNum in the function DOES NOT update the original flight value
console.log(flight);
console.log(jonas);

// flightNum = flight; would copy flight to flightNum, but not change flight
// passenger = jonas; is assigning a reference to the same point in memory as jonas
// SO manipulating the passenger object is the same as manipulating the jonas object since they are the same object in the memory heap

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};

console.log(newPassport(jonas));
checkIn(flight, jonas);

// JavaScript only passes by values, not references
// Passing by reference is passing a reference to any value instead of the value itself, even primatives

// Objects pass a reference to a memory object, HOWEVER that is still a value, but a value that contains a memory address
// So we pass a reference to the function, but DO NOT pass by reference

// -----------------------------------------------------------------------------------
// First-Class and Higher-Order Functions
// JavaScript is a language that has first class functions
// JS treats functions as first-class citizens
// Functions are simply VALUES
// Funtions are just another "type" of object
// Objects are values (FYI)

// Functions can be stored in variables or properties
// We can pass functions as arguments to other functions! (Ex: adding eventListeners and eventHandlers to DOM objects)

// We can return functions FROM other functions
// We can call methods on functions

// HIGHER ORDER FUNCTIONS
// A higher order function is a function that receives another function as an argument, a function that returns a new function, or both
// this is only possible because of first-class functions

// 1. Functions that recieve another function
// Ex: addEventListener
// This is because it receives another function as an input
// The function passed in is called a "callback function"
const buttonAnswer = document.querySelector('.poll');
const greet = () => console.log('Hey Logan');
buttonAnswer.addEventListener('click', greet);

// 2. Functions that return a new function
// Ex higher-order function that returns a function
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

// First-class function are NOT the same as higher-order functions

// First-class functions are a feature that either a programing language has, or not
// First-class functions means that all functions are values
// There are no first-class functions in practice

// Higher-order functions are possible because the language has first-class functions (functions are values)
