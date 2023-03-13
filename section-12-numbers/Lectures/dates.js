'use strict';

// There are 4 ways to create a date

// 1. The new Date constructor
const now = new Date();
console.log(now);

// 2. Parsing a string
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
// Generally not a good idea to make your own string to parse
// Generally safe to parse a string that JS made for you
// The below would be an example of JS making a date to parse for the Bankist app
// console.log(new Date(account1.movementsDates[0]))

// 3. Construct with the number format below
// Note that we use the index for the month, so 11 is December, not 12
console.log(new Date(2037, 11, 19, 15, 23, 5));
// returns Sat Dec 19 2037 15:23:05 GMT-0500 (Eastern Standard Time)

// 4. The amount of milliseconds that have passed since the beginning of Unix Time (Jan 1, 1970)
console.log(new Date(0));
// Below calculates 3 days after Unix Time began
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// WORKING WITH DATES
const future = new Date(2037, 11, 19, 15, 23);
console.log(future.getFullYear());
// built in method - NEVER USE getYear
// returns 2037
console.log(future.getMonth())
// returns 11
console.log(future.getDate())
// returns 19
console.log(future.getDay())
// returns 6
// getDay returns a number corresponding to the day of the week
// There is also getHours, getMinutes, and getSeconds
console.log(future.toISOString())
// returns 2037-12-19T20:23:00.000Z
// This is international standard time
console.log(future.getTime())
// returns the timestamp for Unix Time
// returns 2144866980000

console.log(Date.now())
// returns the Unix Time timestamp for the exact moment in time that it was called

// There are also methods to set the year, month, date, minutes, etc.
console.log(future.setFullYear(2040))
console.log(future)
// changes the initial variable's date

