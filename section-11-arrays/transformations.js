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
const movementsDescriptions = movements.map((mov, i, arr) => {
    return `Movement ${i + 1}: You ${mov > 0 ? `Deposited` : `Withdrew`} $${Math.abs(mov)}`;
  });
console.log(movementsDescriptions)