'use strict';

// My solutions
const dataSetOne = [5, 2, 4, 1, 15, 8, 3];
const dataSetTwo = [16, 6, 10, 5, 6, 1, 4];

// 1.
const inHumanYears = function (ages) {
  const humanYearsArray = [];
  ages.forEach(function (age) {
    if (age <= 2) {
      humanYearsArray.push(age * 2);
    } else {
      humanYearsArray.push(16 + age * 4);
    }
  });
  return humanYearsArray;
};
console.log(inHumanYears(dataSetOne));

const inHumanYears1 = inHumanYears(dataSetOne);
const inHumanYears2 = inHumanYears(dataSetTwo);
console.log(inHumanYears1);

// 2.
const above18 = inHumanYears1.filter(function (year) {
  return year > 18;
});
console.log(above18);

// 3.
const averageAge = inHumanYears1.reduce(function (acc, year) {
  return (acc + year) / inHumanYears1.length;
}, inHumanYears1[0]);
console.log(averageAge);
