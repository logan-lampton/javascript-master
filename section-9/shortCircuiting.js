'use strict';

// || and && can use and return any data type
console.log(3 || 'Jonas');

// short circuiting means returning the first truthy value and not even operating beyond that
// "" is a falsy value
console.log('' || 'Jonas');
console.log(true || 0);
// neither undefined or null are true, so it returns the second value
console.log(undefined || null);

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

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// easier way to write, show the number of guests, if it doesn't exist as a value, return 10
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// And Operator &&
console.log('------&&------');
// && short circuits as soon as it finds a falsey value and returns the falsey value
console.log(0 && 'Jonas');

// if both values are true, it returns the second one
console.log(7 && 'Jonas');

// returns the first falsey value, since it makes the entire operation false
console.log('Hello' && 23 & null & 'Jonas');

// practical example
// IF the orderPizza method exists, then we want to order a pizza with mushrooms and spinach
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// || returns the first truthy value, or the last falsey value if there are NO truthy values

//  && returns the first falsey value, or the last truthy value if there are NO falsey values

// We can use the || operator to set default values

// We can use the && operator to execute code in the second operant if the first operant is true

// Nullish Coalescing Operator (??)

// should say 0 guests, since that is what is declared.
// However, 0 is falsey, so the || (OR) operator returns our default value of 10
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10;
console.log(guests);

// The Nullish Coalescing Operator (??) for the below returns 0, since it returns whatever isn't a nullish value (null, undefined)
// Therefore, it doesn't short circuit on a 0 or empty string ("")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);