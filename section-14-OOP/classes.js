'use strict';

// classes are still functions

// class expression
// const PersonCL = class {}

// class declaration
class PersonCl {
  // the constructor is a method of the class
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.firstName}!`);
  }
}

const jessica = new PersonCl('Jessica', 1989);
console.log(jessica);
jessica.calcAge();

// Classes in ES6 are the same as the .prototype properties, it just looks nicer (syntactic sugar)

// the below is the same as the greet method in the PersonCl class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}!`);
// };
jessica.greet();

// classes are NOT hoisted (unlike function declarations)
// classes are first-class citizens; meaning, they can be passed into functions and also be returned from functions, because classes are just a special type of function
// the body of a class is ALWAYS executed in strict mode

