// The number is the minutes into the game
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔀 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔀 Substitution'],
  [64, '🟨 Yellow Card'],
  [69, '😡 Red Card'],
  [70, '🔀 Substitution'],
  [72, '🔀 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow Card'],
]);

// 1.
const gameUniques = [...new Set(gameEvents.values())];
// console.log(gameUniques);

// 2.
// .delete is to remove a key/value pair
gameEvents.delete(64);
// console.log(gameEvents);

// 3.
// want the size of the numbers in the gameEvents map
// A match is 90 minutes long
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${half} minute ${minute}: ${event}`);
}
