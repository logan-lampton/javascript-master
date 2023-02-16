'use strict';

const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// With ES6 we can also compute the key information (see [weekdays[3]])
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Restaurant object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // New simpler ES6 syntax for functions in an object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //   this is one arguement that is an object
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! Your starter is ${this.starterMenu[starterIndex]}. Your main is ${this.mainMenu[mainIndex]}. It will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Here is your delicious pasta with ${ingredient1}, ${ingredient2}, and ${ingredient3}!`
    );
  },
  // ES6 Object Literals referencing the openingHours object
  openingHours,
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// array consisting of all items of both menus
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for of loop that console.logs all of the items in the menu array
// can use continue and break in for of loops
for (const item of menu) {
  console.log(item);
}

// for of loop that console.logs an array of each item and their index in the menu array
// can destructure the variable right in the equation
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}

// menu.entries is an array iterator

// Optional Chaining
// undefined.open is an error
restaurant.openingHours.mon
  ? console.log(restaurant.openingHours.mon.open)
  : console.log(false);

// WITH Optional Chaining
// ?.x
// Only if mon exists, will the open property be read
// If it doens't exist, it immediately returns "undefined"
// This gets around the error that would otherwise run for the code below
console.log(restaurant.openingHours.mon?.open);
// can have it check for openingHours property before moving to mon property
console.log(restaurant.openingHours?.mon?.open);

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
for (const day of days) {
  // for a variable used as a property value, need to use brackets notation
  // use ?? nullish value to not get a falsey value with Sat being open 24 hours, starting at 0am
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining with Methods

//Checking to see if there is an order method, and if so, run it on (0, 1)
// ?? is a nullish operator and will return the string if the method doesn't exist
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// orderRisotto is not a method that exists, so the string is returned
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Optional Chaining works on arrays

const users = [
    {name: "jonas", email: "hello@jonas.io"}
]
console.log(users[0]?.name ?? "User array empty");

// Looping Objects
// Object keys, values, and entries

// PROPERTY NAMES
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
    openStr += `${day}, `;
};
console.log(openStr);

// PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

// PROPERTY ENTRIES
// This is the entire object transformed into an array
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, {open, close}] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}.`);
}
