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
  console.log(
    `Mark's BMI (${markBMI}) is ${
      markBMI - johnBMI
    } higher than John's BMI (${johnBMI}).`
  );
} else if (johnBMI > markBMI) {
  console.log(
    `Johns's BMI (${johnBMI}) is ${
      johnBMI - markBMI
    } higher than Marks's BMI (${markBMI}).`
  );
} else {
  console.log(`Mark and John have the same BMI (${markBMI})!`);
}
// Instructor solution was basically the same, just not as descriptive

// Coding Challenge #3
const dolphinsAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110) / 3;
if (dolphinsAverageScore > koalasAverageScore) {
  console.log(`Dolphins won with an average score of ${dolphinsAverageScore}!`);
} else if (koalasAverageScore > dolphinsAverageScore) {
  console.log(`Koalas won with an average score of ${koalasAverageScore}!`);
} else {
  console.log(`It was a tie, with an average score of ${dolphinsAverageScore}`);
};
// Bonus 1 mixed with Bonus 2
const dolphinsBonusOne = (97 + 112 + 101) / 3;
const koalasBonusOne = (109 + 95 + 106) / 3;
if (dolphinsBonusOne > koalasBonusOne && dolphinsBonusOne >= 100) {
    console.log(`Dolphins won with an average score of ${dolphinsBonusOne}!`);
  } else if (koalasBonusOne > dolphinsBonusOne && koalasBonusOne >= 100) {
    console.log(`Koalas won with an average score of ${koalasBonusOne}!`);
  } else if (koalasBonusOne === dolphinsBonusOne && koalasBonusOne >= 100 && dolphinsBonusOne >= 100) {
    console.log("Wow, it's a tie!")
  } else {
    console.log("BOTH LOSE!!!");
  };
