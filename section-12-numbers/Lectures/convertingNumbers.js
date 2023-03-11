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
console.log(Number(parseFloat("2.5rem")))
// parseInt would return 2, not 2.5

// isNaN checks to see if a value is a number
console.log(Number.isNaN(20))
// returns false, because 20 is a number

// isFinite checks is something is a finite number
// isFinite is the best way to check if something is a number
console.log(Number.isFinite("20"))
// returns false as the string "20" is not a number
console.log(Number.isFinite(+"20X"))
// returns false as the string "20X" can't be converted to a number
console.log(Number.isFinite(23 / 0))
// returns false as infinite is not a number, or finite

// isInteger method can also check to see if something is a number
console.log(Number.isInteger(34))
// returns true