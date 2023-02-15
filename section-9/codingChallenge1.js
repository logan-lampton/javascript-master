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

// 1. Create one player array for each team

const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. first player in an array is the gk, make an array of fieldPlayers for all the other players on each team

const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);

const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

// 3. Create an array allPlayers containing all players on both teams

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, team 1 used 3 substitute players, so create a new array players1Final containing all the original team1 players plus "Thiago", "Coutinho", and "Perisic"

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object create one variable for each odd (called "team1", "draw", and "team2");

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6. Write a function "printGoals" that recieves an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored (number of player names passed in)

function printGoals(...playerNames) {
  console.log(
    `Player Names: ${playerNames}, # of Goals: ${playerNames.length}`
  );
}
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
