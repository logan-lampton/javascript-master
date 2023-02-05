// Coding Challenge #1
// My solution
const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;
// console.log(markBMI);
const johnBMI = johnMass / johnHeight ** 2;
// console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);
// Instructor solution was essentially the same!

// Coding Challenge #2
// My solution
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is ${markBMI - johnBMI} higher than John's BMI (${johnBMI}).`);
} else if (johnBMI > markBMI) {
    console.log(`Johns's BMI (${johnBMI}) is ${johnBMI - markBMI} higher than Marks's BMI (${markBMI}).`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI})!`)
};
// Instructor solution was basically the same, just not as descriptive