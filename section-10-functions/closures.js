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
// -------------------------------------------------------------------------------------

// Closures
// Closures are not created explicitly, such as a new array or a new function
// Closures happen in certain situations
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers booked`);
  };
};

// booker is a function that returns the function secureBooking and then saves a copy to a new function
const booker = secureBooking();

// The global scope contains the function secureBooking
// When secureBooking is called a new execution context is put on top of the execution stack (passengerCount = 0)
// REMEMBER! Each execution context contains a variable environment

// passengerCount is in the local scope of secureBooking
// Scope chain is the order in which functions are written in the code

// Once passengerCount is set to 0, the secureBooking function has done its job and pops off the top of the call stack

// if called 3 times, the booker function updates the passenger count variable inside the secureBooking function 3 times
booker();
booker();
booker();

// A closure keeps the variables available for as long as they are relevant/being changed by other functions on the call stack beneath it, even when it should otherwise be removed from the call stack

// INSTRUCTOR SAYS:
// A closure makes a function remember all the variables that existed at "the function's birth place"
// A function always has access to the variable environment (VE) of the execution context in which it was created; EVEN AFTER that execution context is gone
// The closure is basically this variable environment attached to the function, exactly at the time and place that the variable was created

// Essentially the scope chain is preserved through the closure, even when a scope has been destroyed; the variable keeps living somewhere in the engine

// We can say that the example booker function closed over its parent scope of secureBooking. This would include any function arguments (this example doesn't have any)

// Thanks to closure the function doesn't lose access to any variables from when the function was created

// JS looks for variables in closure EVEN BEFORE it looks at them in the scope chain
// Closure has priority over scope chain

// More Definitions of Closure
// Def 1. Closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone

// Def 2. A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// Def 3. Analogy: A closure makes sure a function doesn't loose connection to variables that existed at the function's birth place (Like a person that didn't lose touch with their hometown)

// Def 4. Analogy: A closure is like a backpack that a function carries around wherever it goes. Theis backpack has all the variables that were present in the environment where the function was created. If JS can't find a variable, it will look into the backpack for it.

// We don't create closures manually, JS just does it
// We can't reach into a closure or directly access them

// We CAN look at closures in the console
console.dir(booker);