'use strict';

// Keep in mind the syntax of .toLowerCase()
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
console.log(oneWord('Test String Here'));

// remember to use destructuring and the spread operator!
const upperFirstWord = function (str) {
  const [first, ...others] = str.toLowerCase().split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
upperFirstWord('gRANDMA gOT RUN OVer');

// since this takes in a function (fn) this is a higher-order function!
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

// Just pass in the value of the function, DON'T call it
// We are passing the callback functions
// We tell JavaScript to call them later
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// Event listeners are callback functions too!
// addEventListener is a higher-order function
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);

// forEach() is a higher-order function
['Jonas', 'Martha', 'Adam'].forEach(high5);
// returns 3 high five emojis to the console

// JS uses callback functions all the time
// Callback functions makes code more reusable
// Callback functions allow us to create abstraction
// Abstraction is hiding the detail of some code to allow us to look at a problem on a higher level; Ex: instead of a whole code block, we just see the name for the function
// Higher-order functions DELEGATE tasks to lower-level functions (they aren't really called lower-level functions)
// The higher-order functions don't know how to do what the lower-level functions are doing, which is why it needs for them to be called inside of it
