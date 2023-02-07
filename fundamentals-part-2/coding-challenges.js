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

// ------------------------------------------------------------------------

// Instructor's Solution
// ...which is better haha
const calculateAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calculateAverage(44, 23, 71);
const scoreKoalas = calculateAverage(65, 54, 49);

const confirmWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins`);
  }
};

confirmWinner(scoreDolphins, scoreKoalas);