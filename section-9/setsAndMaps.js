'use strict';

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
ordersSet.delete("Risotto");
console.log(ordersSet);

// Sets have no index and it isn't possible to take data out of a set
// No need to get values out of a set as they are all unique and the order doesn't matter
// Use an array if you want to retrieve information

// sets are iterable and you can loop over them
for (const order of ordersSet) {
    console.log(order);
};

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// can make a set within an array with the spread operator
// the spread operator takes the elements out of the iterable and writes them in the array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// to easily get the size of the uniques, use .size operator
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size)
// returns 3

// easy way to calculate the number of UNIQUE letters in a word
console.log(new Set("loganlampton").size);
// returns 8