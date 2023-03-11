'use strict';

// Numbers are always represented as having decimal places
// Due to how JavaScript can't exactly represent base 10 fractions, it shouldn't be used for the math of financial institutions

// Conversion
console.log(Number('23'));
console.log(+'23');
// Number() is the same as says +"23"
// Both convert a string to a number

// Parsing
// You can parse a number from a string
// Every function is also an object
console.log(Number.parseInt('30px', 10));
// JavaScript will parse a number from a string, ONLY if the begining of the string is a number
// The second argument is for what base the number should be in. We almost always want it to be base 10
// If we were working with binary, we would write 2

// parseFloat returns the number with decimal points
console.log(Number(parseFloat('2.5rem')));
// parseInt would return 2, not 2.5

// isNaN checks to see if a value is a number
console.log(Number.isNaN(20));
// returns false, because 20 is a number

// isFinite checks is something is a finite number
// isFinite is the best way to check if something is a number
console.log(Number.isFinite('20'));
// returns false as the string "20" is not a number
console.log(Number.isFinite(+'20X'));
// returns false as the string "20X" can't be converted to a number
console.log(Number.isFinite(23 / 0));
// returns false as infinite is not a number, or finite

// isInteger method can also check to see if something is a number
console.log(Number.isInteger(34));
// returns true
// ------------------------------------------------------------------

// Methods for calculating square root
console.log(Math.sqrt(25));
// returns 5
// can calculate squart roots with exponents
console.log(25 ** (1 / 2));
// returns 5
// We can calculate cubic routes this way too
console.log(8 ** (1 / 3));
// returns 2

// Math.max returns the maximum value
// BUT IT CAN'T PARSE ANYTHING, SO MUST ONLY BE NUMBERS
console.log(Math.max(5, 18, 23, 11, 2));
// returns 23

// Math.min returns the minimum value
console.log(Math.min(5, 18, 23, 11, 2));
// returns 2

// radius of a circle (Ex: with a number of pixels to practice parseFloat method)
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random numbers!
console.log(Math.floor(Math.random() * 6) + 1)
// Returns between 1 and 6
// Below is another example using another methodology
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min
console.log(randomInt(10, 20))
// Returns a number between 10 and 20

// Rounding Integers!
console.log(Math.trunc(23.3))
// returns 23
// trunc always does the math floor, so 23.9 would also return 23
console.log(Math.round(23.9))
// returns 24
// rounds to the nearest number
console.log(Math.ceil(23.3))
// returns 24
// Math ceil rounds up ALWAYS
console.log(Math.floor(23.3))
// returns 23
// Math floor round down ALWAYS
// All these methods do type coercion too!

// trunc and floor work the same for positive numbers, but floor works better for negative numbers, as it correctly rounds down for negative numbers

// Rounding decimals!
// Decimals are known as floating point numbers
console.log((2.7).toFixed(0))
// returns 3 as a STRING
console.log(2.7.toFixed(3))
// returns 2.700 as A STRING
// the argument in toFixed is for how many floating point places there should be
// strings are returned as NUMBERS with toFixed
console.log(+(2.345).toFixed(2))
// returns 2.35 as A NUMBER