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
