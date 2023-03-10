'use strict';

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
const { name, openingHours, categories } = restaurant;

// to create a new set, you type new Set() with an iterable, like an array
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// The set reduces duplicates down to one instance
// Set(3) {'Pasta', 'Pizza', 'Risotto'}
console.log(ordersSet);

// This set would make each letter into a separate string
// Set(5) {'J', 'o', 'n', 'a', 's'}
console.log(new Set('Jonas'));

console.log(ordersSet.size);
// returns 3

console.log(ordersSet.has('Pizza'));
// returns true

console.log(ordersSet.has('Bread'));
// returns false

// .has for sets is similar to the .includes method for arrays

// adding more to the set still only includes one of each value
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Simply delete with a .delete method
ordersSet.delete('Risotto');
console.log(ordersSet);

// Sets have no index and it isn't possible to take data out of a set
// No need to get values out of a set as they are all unique and the order doesn't matter
// Use an array if you want to retrieve information

// sets are iterable and you can loop over them
for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// can make a set within an array with the spread operator
// the spread operator takes the elements out of the iterable and writes them in the array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// to easily get the size of the uniques, use .size operator
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// returns 3

// easy way to calculate the number of UNIQUE letters in a word
console.log(new Set('loganlampton').size);
// returns 8

// -------------------------------------------------------------------------------------------------------------------------
// maps are MUCH more useful than sets
// map keys can be ANY kind of data, which is a big deal

const rest = new Map();
// "name" is the key, "Classico Italiano" is the value
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisobon, Portugal');

// the .set method returns the updated Map object
// This allows us to chain the .set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);

// .get method grabs the value associated with that key
console.log(rest.get(true));
// returns "We are open"

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// returns true and maps to the value, ultimately returning "We are open"

console.log(rest.has('categories'));
// returns true

// to delete
rest.delete(2);
// deletes the key of 2 and the value associated

// .clear method removes the entire Map
// rest.clear() would get rid of our map

// We can use arrays as map keys
// to make sure we can actually grab the data we NEED TO DECLARE THE ARR AS A VARIABLE FIRST
// Otherwise the .set and .get will be not accessing the same memory
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));

// you can also save parts of the DOM
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Creating a new Map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question.entries().next().value);

// Converting an object to a Map
// Good for when you need a map and already have an object
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Maps are iterables, so the for loop works on them
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// remember to convert the string prompt answer to a number
// const answer = Number(prompt('Please provide your answer as 1, 2, or 3'));

// my more naive approach to the answer
// function response(answer) {
//   if (Number(answer) === 3) {
//     return question.get(true);
//   } else {
//     return question.get(false);
//   }
// }
// console.log(response(answer));

// The better approach to the answer from the instructor
// just to have an answer without a prompt
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// To convert a map to an array
// use the spread operator in an array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
