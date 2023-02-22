'use strict';

const airline = 'Delta Airlines';
const plane = 'A320';
console.log(plane[0]);

// indexOf method
console.log(airline.indexOf('r'));
// returns 8 for the 8 index
console.log(airline.lastIndexOf('e'));
// returns 12, as that is the index of the last "e" in the string
console.log(airline.indexOf('Airlines'));
// returns 6, as that is the index of the first letter at the start of "Airlines" in the string
// "Airlines" is a substring
// case sensative, so "airlines" would return -1, as it is false
// ------------------------------------------------------------------------------------------------------------------------

// Slice method
console.log(airline.slice(6));
// returns the string starting at indexOf 6 until ONE index before what we write. Since we didn't specify it goes to the end
// the return is therefore "Airlines"
// Slice method returns a NEW string
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// returns the last word, including the space " Airlines", so we add + 1 to ONLY return the last substring
// returns "Airlines"
console.log(airline.slice(-2));
// returns the last 2 characters; returns "es";
console.log(airline.slice(1, -1));
// returns the string without the first index and cuts out the last index
// returns "elta Airline"

// Example challenge
// My solution
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  if (seat.includes('B') || seat.includes('E')) {
    console.log('A middle seat');
  } else {
    console.log('Not a middle seat');
  }
};

// Instuctor solution
const instructorMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('30E');
instructorMiddleSeat('11B');
instructorMiddleSeat('23C');

// JavaScript treats strings as primatives
// When we call a method of a string, JavaScript does "boxing"; it puts it in an object and then calls the method on it; it then turns it back to a string primative
// ------------------------------------------------------------------------------------------------------------------------

// toLowerCase / toUpperCase
console.log(airline.toLowerCase());
console.log('airline'.toUpperCase());
// Can call on variables or strings directly

const passenger = 'wALdO';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// A function to return the fixed capitalization for anyone
function correctPassengerSpelling(passenger) {
  const passengerToLower = passenger.toLowerCase();
  return console.log(
    passengerToLower[0].toUpperCase() + passengerToLower.slice(1)
  );
}
correctPassengerSpelling('gRUNkeLMEisTER');
// ------------------------------------------------------------------------------------------------------------------------

// Comparing strings
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// all in one step version
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
// returns true
// ------------------------------------------------------------------------------------------------------------------------

// Replacing parts of strings
const priceGB = '288,97E';
// My answer
const priceUS = function (priceGB) {
  console.log('$' + priceGB.replace(',', '.').replace('E', ''));
};
priceUS(priceGB);

// replaceAll
const announcement =
  'All passengers come to boarding door 23; boarding door 23.';
console.log(announcement.replaceAll('door', 'gate'));
// ------------------------------------------------------------------------------------------------------------------------

// Booleans
const plane2 = 'A320neo';
console.log(plane2.includes('n'));
// returns true
console.log(plane2.startsWith('A32'));
// returns true

if (plane2.startsWith('A') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus plane family');
}

// Practice exercise
const checkBaggage = function (items) {
  // always convert strings toLowerCase
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(
      'Please check your baggage before boarding the plane, or you will not be allowed onboard'
    );
  } else {
    console.log('You are free to bring your baggage onboard the plane');
  }
};
checkBaggage('I have a Laptop, some Food, and a Pocket Knife');
checkBaggage('I have some socks and camera');
checkBaggage('I have some snacks and a gun for protection');
// ------------------------------------------------------------------------------------------------------------------------

// Split
console.log('a+very+nice+string'.split('+'));
// a very common way to grab first and last names
// the code below creates an array with two elements
const [firstName, lastName] = 'Logan Lampton'.split(' ');
console.log(firstName, lastName);

// Join
const mister = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// returns one string composed of the parts of the array
console.log(mister);

// .split() and .join() will be used a lot
// Example usecase of the methods
const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  const namesUpperCase = [];
  names.forEach(name => {
    namesUpperCase.push(name[0].toUpperCase() + name.slice(1));
    // could also write namesUpperCase.push(name[0].replace(name[0], name[0]).toUpperCase)
  });
  console.log(namesUpperCase.join(' '));
};
capitalizeName('jessica ann smith davis');
// ------------------------------------------------------------------------------------------------------------------------

// Padding a string
// Padding a string is adding a certain amount of characters to the beginning of a string until it is the desired length
const message = 'Got to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '-'));
// returns a string with "+" at the front as many times as it takes to make the string 25 characters long; "-" at the end until the string is 30 characters long

// Example on how to mask a credit card number
const maskCreditCard = function (number) {
  // the + operant with a string would make the number into a string; since the string is empty, the number doesn't change outside of becoming a string
  const str = number + '';
  return console.log(str.slice(-4).padStart(str.length, '*'));
};
// generally, websites show the last four digits and mask the rest
maskCreditCard(48467563920);
// ------------------------------------------------------------------------------------------------------------------------

// Repeat
const delayMessage = 'Bad weather... All departures delayed...';
console.log(delayMessage.repeat(5));
// returns the delayMessage 5 times in a row

const planesInLine = function (num) {
  console.log(`There are ${num} planes in line ${'✈️'.repeat(num)}`);
};
// emojis count as strings
planesInLine(10);

// There are many more string methods that can be explored on MDN
