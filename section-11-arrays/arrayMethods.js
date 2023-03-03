'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Arrays are also objects
// Array methods are built-in tools attached to all arrays in JS

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method
// Similar to the slice method on strings
// You take a slice of the array without changing the original array
// first argument is the starting index; if you don't have a second argument, then it will include everything else to the end of the array
console.log(arr.slice(2));

// The last index isn't included in the slice, so this would be the 2 and 3 index, as it ends 1 index before 4
console.log(arr.slice(2, 4));

// slice(-1) is always the last element in the array; you could have slice(-2) for the second to the last, etc.
console.log(arr.slice(-1));

// slice(1, -2) would make a slice of the 1 index to the end, excluding the last 2 indexes; that would return ["b", "c"] in our example
console.log(arr.slice(1, -2));

// slice without any argument will make a shallow copy of an array
console.log(arr.slice());

// Splice method
// Splice affects (mutates) the original array
// Any numbers spliced are removed for the original array
console.log(arr.splice(2));
// beginning and end arguments work the same as slice

// Reverse method
// updating the value of the arr let variable, so that the array is full again following the splice method call
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
// Reverse also mutates the original array
console.log(arr2.reverse());
console.log(arr2);

// Concat method
// takes the first array and adds the second array to the end of the first array
// takes an argument of the second array
const letters = arr.concat(arr2);
// This is the same result that we would get if we used the spread operator (...arr, ...arr2)
console.log(letters);
// concat does NOT change the original arrays
console.log(arr);
console.log(arr2);

// Join method
console.log(letters.join('-'));
console.log(arr);
// Join does NOTE affect the original arrays
// Join takes an argument of what you would like between each element when you combine them.

// --------------------------------------------------------------
// New At Method

const arr3 = [23, 11, 64];
// the at method returns the value at that exact index
console.log(arr3.at(0));
// This returns the 0 index (23)

// At method instead of bracket notation
// Below are two more traditional ways to call the last element in an array
console.log(arr3[arr3.length - 1]);
// this would return the last element in an array
console.log(arr3.slice(-1)[0]);

// Newer method!
console.log(arr.at(-1));
// --------------------------------------------------------------

// forEach Method

// older "for of" format
// entries is another array method
// Deconstructing into 2 variables, the index and movement variable
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('forEach -----------------------------------------');

// forEach Format

// forEach requires a callback function
// forEach is a higher order function
// forEach calls the callback function, WE don't

// forEach loops around the array, and FOR EACH loop it executes the callback function
// each loop it recieves the current element of the array as an argument (which we called "movement" below)

// forEach passes in arguements of (the current element, the index, and the array)
// Can just pass in the current element, or two of the arguments if you want; the ORDER DOES MATTER THOUGH
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
});

// You can't break out of a forEach loop
// IT WILL loop over the entire array
// Use for-of if you need to break out of a function
// Otherwise, using forEach is a matter of preference
