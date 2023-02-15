'use strict';

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// much better to make a new array with the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

// can list out the individual elements of an array
console.log(...newArr);

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

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// spread operator doesn't make new variables

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const joinedMenu = [...newMenu, ...restaurant.starterMenu];
console.log(joinedMenu);

// The spread operator works on all iterables
// Iterables include arrays, strings, maps and sets
// Objects are NOT iterables

const str = 'Logan';
const letters = [...str, ' ', 'L.'];
console.log(letters);
console.log(...str);

// spread operator doesn't work in ${...x}

// Real-world example
const ingredients = [
  prompt("Lets's make pasta! Please provide 3 ingredients. Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1975 };
console.log(newRestaurant);

// Copying objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Roma Gaga Oolala';
console.log(restaurantCopy);
