'use strict';

///////////////////////////////////////
// Scoping in Practice
const firstName = 'Logan';

function calcAge(birthYear) {
  let year = 2023;
  const age = year - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} years old. You were born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const string = `You're a Millenial, ${firstName}!`;
      console.log(string);

      function add(a, b) {
        return a + b;
      }
      add(2, 3);
    }
  }
  printAge();
  return age;
}
console.log(calcAge(1988));

///////////////////////////////////////
// Hoisting and TDZ in Practice
// console.log(me);
// console.log(job);
// console.log(birthYear);

// can't hoist let or const (var returns undefined)
var me = 'Logan';
let job = 'software engineer';
const birthYear = 1988;

console.log(addDecl(2, 3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

// really shouldn't have the if statement first, but with a var, it will return undefined and assume that there are no products

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// can't hoist arrow functions
// const addArrow = (a, b) => a + b;

// variables declared with let or const don't appear as properties of the global window object of the browser
var x = 1;
let y = 2;
const z = 3;

///////////////////////////////////////
// The this Keyword in Practice

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

///////////////////////////////////////
// Objects vs. primitives

///////////////////////////////////////
// Primitives vs. Objects in Practice
