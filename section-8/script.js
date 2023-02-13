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

// console.log(this) on a global scale selects the window object

// this in a declared function returns undefined
function calcAge2(birthYear) {
  let year = 2023;
  const age = year - birthYear;
  console.log(this);
}
calcAge2(1991);

// this in an arrow function returns the LEXICAL this keyword, the this keyword of the parent scope. In this case it would be the global scope, so the window object.
// arrow functions do not get their own this keyword
const calcAgeArrow = birthYear => {
  let year = 2023;
  const age = year - birthYear;
  console.log(this);
};
calcAgeArrow(1991);

// for objects, the this keyword within the object, refers to the object
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
// this within jonas, will return the jonas object
jonas.calcAge();

const matilda = {
  year: 2017,
};
// a function is just a value; below is an example of method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// this is undefined if we assign the calcAge method to a variable that isn't an object
const f = jonas.calcAge;
// f.calcAge();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

// logan below is an object literal
const logan = {
  firstName: 'Logan',
  year: 1988,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    // older codebases use a variable called 'self'
    //   const self = this;
    //   const isMillenial = function () {
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // the this keyword MUST be undefined in a regular function call
    // },

    // if you need to call a function within a method, you can make the method an arrow function, that will make the this keyword go from 'undefined' to the parent this keyword, so the keyword of the object!!!
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    // the this keyword MUST be undefined in a regular function call
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
logan.calcAge();
// logan.greet() will be undefined as the this keyword in the arrow function is the parent scope this keyword (window object in this case)
logan.greet();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
// the arguments keyword shows the array of arguments
// you can add more arguements to a function; they will be added to the arguments array, but not be named
addExpr(2, 5, 10, 4, 'etc');

// the arguments keyword ONLY exists in regular functions. NOT arrow functions.
// the arguments keyword isn't that important anymore.

///////////////////////////////////////
// Objects vs. primitives

// Primatives are:
// number, string, boolean, undefined, null, symbol, bigInt
let age = 30;
let oldAge = age;
age = 31;
// age = 31, oldAge = 30
console.log(age);
console.log(oldAge);

const him = {
  name: jonas,
  age: 30,
};

const friend = him;
friend.age = 27;

// changes the age of both objects to 27
// We didn't copy the object, we just made a new variable that also points to that object in the heap
console.log(him, friend);

// Basically everything in JavaScript that isn't a primative is an object:
//   object literals, arrays, functions, many more

// Primatives are called primative types and objects are called reference types

// Primative types are stored in the call stack
// Reference types (objects) are stored in the heap

// variables in the call stack reference the actual object stored in the heap

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primative types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// this would change the last name for the original jessica object. We didn't make a new jessica object, just a second variable referencing the same object.

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Greg', 'Martha', 'Waffleboy', 'Spatula Jr.'],
};

// The result would be a new object with all the details from jessica2
const jessica3 = Object.assign({}, jessica2);

// if we change the lastName on jessica3 object, it will now not affect jessica2 object
jessica3.lastName = 'Davis';
jessica3.family.push('Tingle');
jessica3.family.push('Literally Santa Claus');
console.log('Jessica2:', jessica2);
console.log('Jessica3:', jessica3);

// Object.assign only makes a SHALLOW copy
// It only makes a new copy of the top level object
// If there are any objects inside of the top level object, they are still shared with both top level objects.

// the family array (which is an object) is still shared by jessica2 and jessica3

// Deep cloning generally requires a separate library
