'use strict';
// flowchart from diagrams.net (which is free!)

// selecting the elements of the player scores
const playerOneScoreEl = document.querySelector('#score--0');
const playerTwoScoreEl = document.getElementById('score--1');
// player current score elements
const playerOneCurrentEl = document.getElementById("current--0")
const playerTwoCurrentEl = document.getElementById("current--1")
// select the dice element
const diceEl = document.querySelector('.dice');
// selecting the buttons
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// set the elements of the player scores to 0 when the page loads
playerOneScoreEl.textContent = 0;
playerTwoScoreEl.textContent = 0;

// hide the dice element when the page loads
diceEl.classList.add('hidden');

// variable for the current score
// Needs to be let as we will keep updating it
// Needs to be outside of the rollBtn click event so that it isn't reset each roll
let currentScore = 0;

rollBtn.addEventListener('click', function () {
  // Rolling the dice; generating a number between 1-6
  const dice = Math.floor(Math.random() * 6) + 1;
  // Rolling the dice; displaying the correct die image
  diceEl.classList.remove('hidden');
  // display the correct dice image that matches the number roll
  diceEl.src = `dice-images/dice-${dice}.png`;
  // log dice value to the current player's score IF the roll IS NOT 1
  if (dice !== 1) {
    // this is shorthand for currentScore = currentScore + dice
    currentScore += dice;
    playerOneCurrentEl.textContent = currentScore
    // WILL NEED TO UPDATE THE LINE ABOVE
  } else {
    // Switch to the other player's turn
  }
  console.log(dice);
});
