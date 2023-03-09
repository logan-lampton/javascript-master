'use strict';

function checkDogs(dogsJulia, dogsKate) {
  const correctedJulia = dogsJulia.slice(1, -2);
  const combined = correctedJulia.concat(dogsKate);
  combined.forEach(function (dog, i) {
    const checkAdult = dog > 2 ? 'an adult' : 'a puppy';
    console.log(`Dog number ${i + 1} is ${checkAdult} who is ${dog} years old`);
  });
}

const juliaArray = [3, 5, 2, 12, 7];
const kateArray = [4, 1, 15, 8, 3];

const juliaArray2 = [9, 16, 6, 8, 3];
const kateArray2 = [10, 5, 6, 1, 4];

console.log('TEST ONE');
checkDogs(juliaArray, kateArray);

console.log('TEST TWO ---------------------------------------------');
checkDogs(juliaArray2, kateArray2);
