'use strict';

// classes are still functions

// class expression
// const PersonCL = class {}

// class declaration
class PersonCl {
  // the constructor is a method of the class
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}!`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // test to see if the fullName provided has a first and last name
  // this._ is just a naming convention, not a rule
  // we are creating a new fullName variable with this._
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name (needs a first and last name)`);
    }
  }
  //   the getter function allows the setter variable to update the original variable
  // Otherwise fullName is undefined
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Landrey', 1989);
console.log(jessica);
jessica.calcAge();

// Classes in ES6 are the same as the .prototype properties, it just looks nicer (syntactic sugar)

// the below is the same as the greet method in the PersonCl class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}!`);
// };
jessica.greet();

console.log(jessica.age);
console.log(jessica.fullName);

// classes are NOT hoisted (unlike function declarations)
// classes are first-class citizens; meaning, they can be passed into functions and also be returned from functions, because classes are just a special type of function
// the body of a class is ALWAYS executed in strict mode

// /////////////////////////////////////////////////
// Getters and Setters

// functions that get and set a value, but still look like regular properties

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  // to turn into a getter, simply prepend "get"
  get latest() {
    return this.movements.slice(-1).pop();
  },
  // each setter must have exactly one argument
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// setters are called like any other property
account.latest = 600;
console.log(account.movements);

const walter = new PersonCl('Walter Cronchite', 1965);
console.log(walter);

// You don't have to use getters and setters, but they can help a lot with validations
