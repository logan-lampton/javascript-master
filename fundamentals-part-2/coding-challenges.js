// My Solution
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`Drat! No winner this time!`);
  }
}

function calcAverage(
  dolphinsScore1,
  dolphinsScore2,
  dolphinsScore3,
  koalasScore1,
  koalasScore2,
  koalasScore3
) {
  const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
  const avgKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
  return checkWinner(avgDolphins, avgKoalas);
}

console.log(calcAverage(44, 23, 71, 65, 54, 49));
console.log(calcAverage(85, 54, 41, 23, 34, 27));

// ----------------------------------------------------------------------------

// Instructor's Solution
// ...which is better haha
const calculateAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calculateAverage(44, 23, 71);
let scoreKoalas = calculateAverage(65, 54, 49);

const confirmWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins`);
  }
};
// Test 1
confirmWinner(scoreDolphins, scoreKoalas);

// Test 2
// reassign the values
scoreDolphins = calculateAverage(85, 54, 41);
scoreKoalas = calculateAverage(23, 34, 27);
confirmWinner(scoreDolphins, scoreKoalas);
// ----------------------------------------------------------------------------

// Coding Challenge #2
// My Answer
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//Instructor's Answer
const instructorCalcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// as an arrow function
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const instructorBills = [125, 555, 44];
const instructorTips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2]),
];
const instructorTotals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];

// ----------------------------------------------------------------------------

// Coding Challenge #3
// My Solution
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

// since the method doesn't call itself, we need to explicitly call it in order to have access to the BMI value
mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s (${john.BMI}!)`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s (${mark.BMI}!)`
  );
} else {
  console.log("Their BMI is the same!");
}

// ----------------------------------------------------------------------------
