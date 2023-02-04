// Values and Variables
//a value is the smallest unit in JS
// 4 + 56 + 100 are three values that are combined by mathmatical operators to make one value
// 'Logan' is a value

let js = "amazing";
// js is a variable assigned to the value 'amazing'

// Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined (not yet defined)
// 5. Null (it IS NOT an object)
// 6. Symbol
// 7. BigInt (larger integers than the number type can hold)

// JS has dynamic typing - you do NOT have to manually define the data type; value has type, not the variable
// console.log(typeof 456) returns number
// if you don't assign a value to a variable, it will have the type of undefined

// let, const and var
let age = 30;
age = 31;
// a const value, can NOT be reassigned
const birthYear = 1988;
// const requires an initial value
// always use const, unless you know that the variable will change to limit variable mutations and reduce bugs
// DON'T USE VAR; just understand it

// Basic Operators
// includes all mathematic operators
// 2 ** 3 is 2 to the power of 3
// + can be used to concatonate strings
const firstName = 'Logan';
const lastName = 'Lampton';
console.log(firstName + ' ' + lastName);
// assignment operators include =
// += adds the number to the current total