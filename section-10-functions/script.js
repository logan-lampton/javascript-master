'use strict';

// This is the OLD way to assign default parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    // flightNum is the same as flightNum: flightNum
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("Test");
// console.log(booking);
