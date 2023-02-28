'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // new way of writing a function in an object
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline} flight ${this.iataCode}${flightNum}`,
      name,
    });
  },
};
// Example
lufthansa.book(374, 'Greg');
lufthansa.book(143, 'Big Bird');

// you can declare the function within the object as a function that can be used throughout the document, like so:
const book = lufthansa.book;

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  // not immediately invoking the function
  book,
};

// Since book is a copy and now being called as a regular function, rather than a method within the lufhansa object. Therefore, the this keyword will point to UNDEFINED and it will throw an error
// book(1337, "Chuck Norris")

// Call Method
// the call method allows us to use methods/functions with the this keyword
// the first argument of the call method is the location you want the function to run, in this case the eurowings object. We then add the other arguements the function needs to run
book.call(eurowings, 23, 'Sara Williams');
book.call(lufthansa, 418, 'Big Mac');
book.call(eurowings, 623, 'Niko Bellic');
console.log(eurowings.bookings);
console.log(lufthansa.bookings);

// Apply Method
const flightData = [583, 'George Carlin'];
// first argument is the function to use, the second is the variable to be "applied"
book.apply(eurowings, flightData);
// The applied method is not used very often anymore; Now we use the spread operator
book.call(eurowings, ...flightData);