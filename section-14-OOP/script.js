'use strict';

// ///////////////////////////////////
// Constructor Functions

// example constructor function below:
// Arrow functions do not work for constructor functions, since they don't have a this keyword, which is REQUIRED
const Person = function (firstName, birthYear) {
  // It is a convention to create properties with the same name as the parameters passed in
  this.firstName = firstName;
  this.birthYear = birthYear;

  // DON'T CREATE METHODS (example below) IN CONSTRUCTOR FUNCTIONS
  // It would generally slow down code a lot when used to construct a lot of objects
  this.calcAge = function () {
    console.log(new Date() - this.birthYear);
  };
};

// calling the constructor function
const jonas = new Person('Jonas', 1991);
// Behind the scenes of the call
// 1. New object {} is created
// 2. Function is called, this keyword is the new empty object
// 3. {} is linked to prototype
// 4. The function automatically returns

console.log(jonas);

// Creating two more constructor objects from a constructor
// These are considered instances
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1977);
console.log(matilda, jack);

// Testing if something is an instance of the constructor function
console.log(jonas instanceof Person);
// returns true
