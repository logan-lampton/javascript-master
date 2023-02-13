'use strict';

///////////////////////////////////////
// Scoping in Practice
const firstName = 'Logan';

function calcAge(birthYear) {
  let year = 2023;
  const age = year - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age} years old. You were born in ${birthYear}.`
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996) {
      const string = `You're a Millenial, ${firstName}!`
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

///////////////////////////////////////
// The this Keyword in Practice

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

///////////////////////////////////////
// Objects vs. primitives

///////////////////////////////////////
// Primitives vs. Objects in Practice
