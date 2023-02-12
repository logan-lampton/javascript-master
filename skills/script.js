// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Steps to solve a problem
// 1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem

// 2. Divide and conquer: Break a big problem into smaller, sub-problems

// 3. Don't be afraid to do as much research as you have to

// 4. For bigger problems, write pseudo-code before writing the actual code

// THE PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is: "Given an array of tempartures of one day, calculate the temparature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temperature amplitude?
// Answer: The difference between the highest and lowest temperatures.
// - How do we calculate the max and min temperatures?

// Break up into sub-problems
// - How to ignore errors?
// - Find max value in a temp array
// - Find min value in a temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    // to ignore 'errors', which are strings
    if (typeof currentTemp !== 'number') {
      continue;
    }
    if (max < currentTemp) {
      max = currentTemp;
    }
    if (min > currentTemp) {
      min = currentTemp;
    }
  }
  return max - min;
};
console.log(calcTempAmplitude(temperatures));

// Problem #2
// Function should recieve two arrays
//  - Merge 2 arrays
const calcTempAmplitudeNew = function (tempArray1, tempArray2) {
  // Merge 2 arrays
  const temperatures = tempArray1.concat(tempArray2);
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    // to ignore 'errors', which are strings
    if (typeof currentTemp !== 'number') {
      continue;
    }
    if (max < currentTemp) {
      max = currentTemp;
    }
    if (min > currentTemp) {
      min = currentTemp;
    }
  }
  return max - min;
};
console.log(calcTempAmplitudeNew(temperatures));
