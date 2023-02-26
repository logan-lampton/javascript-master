'use strict';

// This is the OLD way to assign default parameters
const bookings = [];

// in order to have price default value to equal 400 * the number of passengers, numPassengers had to be defined before it in the order of parameters; it COULD NOT be listed afterwards
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 400 * numPassengers
) {
  // if the result is a falsey value (not present), it will return 1
  // This is the OLD way to assign default parameters
  // numPassengers = numPassengers || 1;

  const booking = {
    // flightNum is the same as flightNum: flightNum
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// You can't skip parameters in calling the argument; they will always be in the order you set them in the original function
createBooking('Test');
createBooking('LM123', 2, 800);
// the default parameter in the function arguments that we created will calculate the cost based on the number of passengers (5 in the case below)
createBooking('LM365', 5);
// if you call undefined in one of the parameters it will return the default; this is a good way to set the value of a later argument; here we skip the number of passengers
createBooking('FL712', undefined, 500);

console.log(bookings);
