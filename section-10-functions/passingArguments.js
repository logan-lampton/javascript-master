'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr ${passenger.name}`;

  if (passenger.passport === 24739479284) {
    alert('Check in please');
  } else {
    alert('Wrong passport number entered');
  }
};

checkIn(flight, jonas);
// Since flightNum is a copy of the primative value of flight, the updated flightNum in the function DOES NOT update the original flight value
console.log(flight);
console.log(jonas);

// flightNum = flight; would copy flight to flightNum, but not change flight
// passenger = jonas; is assigning a reference to the same point in memory as jonas
// SO manipulating the passenger object is the same as manipulating the jonas object since they are the same object in the memory heap

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};

console.log(newPassport(jonas));
checkIn(flight, jonas);

// JavaScript only passes by values, not references
// Passing by reference is passing a reference to any value instead of the value itself, even primatives

// Objects pass a reference to a memory object, HOWEVER that is still a value, but a value that contains a memory address
// So we pass a reference to the function, but DO NOT pass by reference
