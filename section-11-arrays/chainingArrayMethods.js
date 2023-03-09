'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// .filter makes a new array
// the filter method will make a new array with only the elements that are greater than 0
// the map method will convert the element to have the value of USD
// finally the reduce method adds all of the positive, USD currency value elements together
// Can think of chaining methods as "Going down the pipeline"
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSD);

// chaining methods can make it more difficult to debug
// -----------------------------------------------------------------

// Includes and Some Methods

// EQAULITY
// Includes checks only for equality
console.log(movements);
console.log(movements.includes(-130));

// CONDITION
// Some method can specify a condition
const anyDeposits = movements.some(function (mov) {
  return mov > 1500;
});
console.log(anyDeposits);

console.log(movements.some(mov => mov === -130));

// Every Method
// EVERY element must satisfy the condition for it to return true
console.log(movements.every(mov => typeof mov === 'number'));

// Seperate callback
const deposit = mov => mov > 0;
// can use that function for any method that requires a callback method
// Don't expect it to work with methods that don't take in callback functions
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
// -----------------------------------------------------------------

// Flat and Flatmap Methods
// Flat method makes all the elements into one array (ex: if they were in subarrays)
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// an even deeper array
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// flat method only goes one level deep when flattening an array
console.log(arrDeep.flat());
// adding the argument of how many levels deep flattens the array down to that level
console.log(arrDeep.flat(2));
// --------------------------------------------------------------

// Sorting Arrays
// Below is using the built in JS sort method
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
// the sort method mutates the original array
console.log(owners);

// The result of the sort method on numbers is pretty weird
console.log(movements);

// ASCENDING
// return < 0, A will be before B (keep order)
// return > 0, B will be before A (switch order)
// return 1 means to switch the order
// return -1 means to keep the order
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  }
});
console.log(movements);

// DECENDING
// (Greatest values to least values)
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
});
console.log(movements);

// IMPROVED VERSION of Ascending
movements.sort((a, b) => a - b);
// We know that a - b will be a positive number if a is greater than b
console.log(movements);

// DON'T USE THE SORT METHOD WITH A MIXED ARRAY OF NUMBERS AND STRINGS
