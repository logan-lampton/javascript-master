'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// .filter makes a new array
// the filter method will make a new array with only the elements that are greater than 0
// the map method will convert the element to have the value of USD
// finally the reduce method adds all of the positive, USD currency value elements together
// Can think of chaining methods as "Going down the pipeline"
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInUSD);

// chaining methods can make it more difficult to debug