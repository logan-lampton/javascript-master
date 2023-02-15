'use strict';

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

//   this is one arguement that is an object
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order recieved! Your starter is ${this.starterMenu[starterIndex]}. Your main is ${this.mainMenu[mainIndex]}. It will be delivered to ${address} at ${time}`);
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

// Use the curly braces {} when destructuring objects
// In an object, the order of elements doesn't matter
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// renaming the variables for the elements in the object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// you can set default values while destructuring objects
// below the default values for the element names are empty arrays
// since there is a starterMenu element, the starters variable will include the values paired with that key.
// since there is no menu element, that variable will be set to an empty array
// this is very useful when working with an API and not sure of all the data values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// You can override the initial variables with the syntax below
// Need to wrap in parentheses ()
({ a, b } = obj);
console.log(a, b);

// Nested Objects
// Can destructure further using a colon and then the exact name of the inner value
// below doesn't assign a value to "fri", just "open" and "close"
// we then renamed open to o and close to c, so those are the variables
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Pretty common to pass an object straight through a function in JS
restaurant.orderDelivery({
    time: '22:30',
    address: "Via del Sol, 21",
    mainIndex: 2,
    starterIndex: 2
})

// the default values we declared in the original function will handle any details we didn't include in the call below.
restaurant.orderDelivery({
    address: "Via del Sol, 21",
    starterIndex: 1
})