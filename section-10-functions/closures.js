'use strict';

// Immediately Invoked Function Expressions
// A function that disappears right after it is called once
// Necessary for things like async/await

// need to run a function without assigning it
// Need to trick JavaScript into running this by wrapping everything in parentheses; making it into an expression
// NEED to have the parentheses at the end to have it run
(function () {
  console.log('This will never run again');
})();

// Also works for arrow functions
(() => console.log('This will ALSO never run again'))();

// WHY were immediately invoked function expressions created?
// Mostly to protect variable scope, so not used very often anymore, unless you need to work with var
