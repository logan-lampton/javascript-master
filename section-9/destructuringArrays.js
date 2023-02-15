'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring the array
const [x, y, z] = arr;

// You can destructure parts of an array
// The code below assigns variables to the first and third indexes [0, 2] of the categories array in the restaurant object
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// reassigning the variables
// requires making a temporary variable
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// better way; reassign the values of the two variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// calling restaurant object's order function
// the code below would call on "garlic bread" and "pizza"
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`Starter: ${starter}; Main Course: ${mainCourse}`);

// Nested array
// (an array inside of an array)
const nested = [2, 4, [5, 6]]
// skips a spot, so returns 2, [5, 6]
const [i, , j] = nested;
console.log(i, j);
// can immediately destructure an array within an array instead
const [q, , [r, s]] = nested;
console.log(q, r, s);

// trying to assign a variable to an index that doesn't exist results in "undefined"
// you can give default values to variables that they will revert to if no value exists
const [e, f = 1, g = 1] = [8, 9];
console.log(e, f, g);