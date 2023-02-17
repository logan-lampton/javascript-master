'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number
// .entries makes an array of each entire object, so that the index is at index 0 of each array; the name is at index 1
for (const [i, player] of game.scored.entries()) {
  console.log(`Player: ${player} scored goal ${i + 1}`);
}

// 2. Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way

const formOdds = Object.entries(game.odds);
for (const [team, odds] of formOdds) {
  const teamStr = team === 'x' ? 'draw' : `${game[team]}`;
  console.log(`Odds of victory for ${teamStr}: ${odds}`);
}
