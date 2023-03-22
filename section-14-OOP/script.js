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
  //   this.calcAge = function () {
  //     console.log(new Date().getFullYear() - this.birthYear);
  //   };
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

// ///////////////////////////////////
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

// Example of prototypal inheritance
jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// all objects have access to the methods and properties from its prototype

// You can check the prototype of objects as such:
console.log(jonas.__proto__);
// the prototype of jonas is essentially the properties of the prototype constructor, Person

// Person.prototype is NOT the prototype of Person, but it's what will be used as the prototype of all the objects contructed with the Person prototype function

console.log(Person.prototype.isPrototypeOf(jonas));
// returns true

Person.prototype.species = 'Homo Sapiens';
// The objects inherit the property
// The won't OWN the properties, but have them through the prototype
console.log(jonas.species);
// returns Homo Sapiens
console.log(jonas.hasOwnProperty('species'));
// returns false

// ///////////////////////////////////
// Prototypal Inheritance on Built-in Objects

// Object.prototype has many built in methods that can work on prototype objects through the prototypal inheritance
console.log(jonas.__proto__.__proto__)
// How to view the prototype function
console.log(Person.prototype.constructor)

const arr = [3, 6, 4, 5, 2, 7, 9, 3]
// As seen, each array inherits all these methods from the Array.prototype constructor
console.log(arr.__proto__)
// Array.prototype's prototype is Object.prototype


