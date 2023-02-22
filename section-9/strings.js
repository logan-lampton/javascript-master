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
    if(s === "B" || s === "E") {
        console.log("You got the middle seat")
    } else console.log("You got lucky")
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('30E');
instructorMiddleSeat('11B');
instructorMiddleSeat('23C');

// JavaScript treats strings as primatives
// When we call a method of a string, JavaScript does "boxing"; it puts it in an object and then calls the method on it; it then turns it back to a string primative

