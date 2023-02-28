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
// -----------------------------------------------------------------------------------

// Bind Method
// this creates a new function where the "this" keyword is eurowings, It WILL NOT call the book function
const bookEW = book.bind(eurowings);
// would just use the same parameters as the initial book function
bookEW(23, 'Steven Williams');
// Since this copied function pushes to the bookings array, the bookings array now includes flight: "EW23" and name: "Steven Williams"

// Can make new functions for each of the airlines with bind
const bookLH = book.bind(lufthansa);
bookLH(543, 'Big Maude');

// You can make a function that takes in a function and part of its arguments using .bind method
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Peter Gabriel');

// Partial applications mean that part of the arguments are already set

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// the this keyword allows points to the element of the handler function
// SO just calling lufthansa.buyPlane in the event handler, makes this keyowrd into the button element
// We use .bind to make a copy of the function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
// anonymous function that takes in rate and tax as arguments
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// forumla so that the tax is always 20%
const addVAT = addTax.bind(null, 0.2);
console.log(addVAT(200));

// Challenge: Create a function that returns the same value as the addVAT function
// My solution
const addVATChallenge = value => {
  return addTax(0.2, value);
};
console.log(addVATChallenge(200));
