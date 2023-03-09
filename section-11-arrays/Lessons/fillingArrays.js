'use strict';

// Creating new arrays programmatically

// Below creates an array with 7 empty elements
const x = new Array(7);
console.log(x);
// You wouldn't be able to call a lot of methods on this array of empty elements

// You CAN call a fill method on an array of empty elements
// Like slice method, we can specify a begin and end parameter to fill a certain portion of the array
// below fill with the element 1 on the 3rd and 4th indexes
x.fill(1, 3, 5);
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// callback function has access to the current element and current index
// _ means a throwaway variable; in this case, need to have a variable to get to the second parameter, which is the index
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
// This callback function is exactly like the one in a map method
// So like calling the map method on an empty array

// function for array of 100 random dice rolls (1d6)
const randomDiceRolls = Array.from({ length: 100 }, () => {
  return Math.floor(Math.random() * 6);
});
console.log(randomDiceRolls);

