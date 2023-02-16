"use strict";

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

// array consisting of all items of both menus
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for of loop that console.logs all of the items in the menu array
// can use continue and break in for of loops
for (const item of menu) {
    console.log(item);
};

// for of loop that console.logs an array of each item and their index in the menu array
// can destructure the variable right in the equation
for (const [i, el] of menu.entries()) {
    console.log(`${i}: ${el}`);
}

// menu.entries is an array iterator

