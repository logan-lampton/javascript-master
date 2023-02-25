'use strict';
// flowchart from diagrams.net (which is free!)

// selecting the elements of the player scores
const playerOneScoreEl = document.querySelector('#score--0');
const playerTwoScoreEl = document.getElementById('score--1');
// player current score elements
const playerOneCurrentEl = document.getElementById('current--0');
const playerTwoCurrentEl = document.getElementById('current--1');
// Overall player elements, for toggling which is active
const playerOneEl = document.querySelector('.player--0');
const playerTwoEl = document.querySelector('.player--1');
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
// set the active player to switch
let activePlayer = 0;
// scores array; will be updated in this array
// player 1 at position 0, player 2 at position 1
const scores = [0, 0];

// function to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOneEl.classList.toggle('player--active');
  playerTwoEl.classList.toggle('player--active');
};

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to the other player's turn
    switchPlayer();
  }
  console.log(dice);
});

// hold score functionality
// can access the current score, since it is a global variable
holdBtn.addEventListener('click', function () {
  // Add current score to the active player's score
  // scores[1] = scores[1] + currentScore
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // Check if the player's score is >= 100, if so, finish the game
  if (scores[activePlayer] >= 100) {
    // finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // Switch to the next player
    switchPlayer();
  }
});
