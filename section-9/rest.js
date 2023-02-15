'use strict';

// the rest pattern packs elements into an array

// the rest syntax is used on the LEFT side of the assignment operator (the equal sign)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// takes the REST of the array, the remaining elements of the array and put them into a new array

// Restaurant object
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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
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

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// rest DOES NOT include any skipped elements; so in this case the "pasta" between the "pizza" and "risotto" is not included
// As such, the rest pattern MUST be the last variable

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return console.log(sum);
};
add(1, 3, 5);

const x = [23, 5, 7];
// can call the add function on each element of the array using the spread operator
add(...x);

// rest appears all the time in modern JS

// due to the orderPizza function in the restaurant object accepting an arguement with a mainIngredient then the rest operator for otherIngredients, the call below will have mushrooms as the mainIngredient and then an array of all the following ingredients and takes as many ingredients as we want
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// with only one arguement we have pepperoni, and then an empty array
restaurant.orderPizza("pepperoni")