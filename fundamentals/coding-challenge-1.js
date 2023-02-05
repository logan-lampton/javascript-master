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
console.log(markHigherBMI);

// Instructor solution was essentially the same!
