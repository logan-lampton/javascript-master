'use strict';

// The map Method
// Loops over the area and for each element, applies a callback function that we specified
// The map method is often more useful than the forEach method
// The map method returns a NEW array containing the results of applying an operation on all original array elements

// The filter Method
// Used to filter elements in an array that satistfy a specific condition
// The filter method returns a NEW array containing the array elements that passed a specific test condition

// The reduce Method
// The reduce method boils ("reduces") all array elements down to one single value. (For example, adding all elements together)
// E.G. acc + current
// This would loop over each element in an array, adding each one together, then return one final value that is the sum of all the elements
// Known as "the snowball effect" as it "gets bigger and bigger as it rolls down the hill"
// ------------------------------------------------------------------

// The Map Method
// creates a brand new array with the results of a callback method applied to the original array

// Ex: convert the money movements from Euros to US dollars
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

const movementsUSD = movements.map(function (mov, i) {
  return mov * euroToUSD;
});

console.log(movementsUSD);
// The resulting array will be the same number of elements as the original; if we wrote return 23, we would get an array of [23, 23, 23, 23, 23, 23, 23, 23], as we ran a function that just changed each element to 23

// The map method doesn't mutate the original array

// This is the same result as the previous map method example
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUSD);

// Modern JS focuses on "functional programming," which mapping is good for

// Our map method example written as an arrow function:
const movementsUSDArrow = movements.map(mov => mov * euroToUSD);
console.log(movementsUSDArrow);

// want to return in maps, so that the values are pushed to the new array
// Totally fine to have more than one return statement SO LONG AS ONLY ONE OF THEM RETURNS (for example, only one would in the if, else statement)
const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? `Deposited` : `Withdrew`
  } $${Math.abs(mov)}`;
});
console.log(movementsDescriptions);
// we don't call the return in the map method, the map method calls it on each element in a copy of the original array
// -------------------------------------------------------------------

// Filter method
// create a deposits array
// only returns truthy, so only elements where mov > 0
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

// can't chain for loops, which is why chaining array methods is great

// withdrawls using filter method and an arrow function
const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);
// -------------------------------------------------------------------

// Reduce Method
// The accumulator is like a snowball
// The first argument is the accumulator
// The accumulator is the value that we keep adding to on each loop
const balance = movements.reduce(function (acc, cur, i, arr) {
  // in this case, each loop returns the growing acc value and adds the current value to it
  // the console log helps to show the acc at each iteration
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
// You declare when you want to start the accumulator at the end of the function; in this case we are starting at 0

console.log(balance);

// The code below is another way to write what the reduce method is doing
// For loops always need external variables
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

// Maximum value
// Using reduce method
const maximumValue = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
// the function above has no arguments
console.log(maximumValue);
