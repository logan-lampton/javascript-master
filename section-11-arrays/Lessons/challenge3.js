'use strict';

const dataSetOne = [5, 2, 4, 1, 15, 8, 3];
const dataSetTwo = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(years => years >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge(dataSetOne);
const avg2 = calcAverageHumanAge(dataSetTwo);

console.log(avg1, avg2);
