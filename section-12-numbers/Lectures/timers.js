'use strict';

const ingredients = ['olives', 'pepperoni'];

// Callback function; first argument is the function, second argument is the amount of time before it executes (in miliseconds)
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Pizza's here! Your toppings are ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
// remember that spread operator will return a copy of the elements of the array that has them listed and seperated by commas

// This is part of asynchronous JS

// ALL THE ARGUMENTS AFTER THE DELAY ARGUMENT (in milliseconds) will be arguments TO THE CALLBACK FUNCTION

// You can cancel a timeout!
if (ingredients.includes('PEOPLE!!!')) clearTimeout(pizzaTimer);
// ---------------------------------------------------------------------

// setInterval runs forever on the interval that you set
setInterval(function () {
    const now = new Date();
    console.log(now);
}, 10000)

// Practice - making a clock with the hours, minutes and seconds
setInterval(function () {
    const now = new Date();
    console.log(`${now.getHours()}:${now.getMinutes()} ${now.getSeconds()}`);
    console.log()
}, 1000)