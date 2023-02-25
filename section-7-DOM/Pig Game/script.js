'use strict';
// flowchart from diagrams.net (which is free!)

// selecting the elements of the player scores
const playerOneScoreEl = document.querySelector('#score--0');
const playerTwoScoreEl = document.getElementById('score--1');

// select the dice element
const diceEl = document.querySelector('.dice');

// set the elements of the player scores to 0 when the page loads
playerOneScoreEl.textContent = 0;
playerTwoScoreEl.textContent = 0;

// hide the dice element when the page loads
diceEl.classList.add('hidden');
