'use strict';

// document is the entry point to the DOM

// DOM tree
// document => HTML => head and body => titles, sections, etc. => p, links, etc. => etc.

// DOM manipulation is not techincally part of JS
// DOM manipulation is part of web APIs that JS can manipulate
// no need to import anything

// document.querySelector(".guess").value = 19;

// Want to define the secret number just once, not each time the button is pressed
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// returns a number between 1-20

// function calculateSecretNumber() {
//   const secretNumber = Math.trunc(Math.random() * 20 + 1);
//   return secretNumber;
// }

// The function is not called immediately, ONLY when the click occurs
document.querySelector('.check').addEventListener('click', handleClick);

// variable for the score
let score = 20;
let highscore = 0;
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');

//I don't want to keep writing the querySelector for .message
const message = document.querySelector('.message');
const guessText = document.querySelector('.guess');
const numberText = document.querySelector('.number');

function handleClick() {
  // the input is a string, so need to convert to a number
  const guess = Number(guessText.value);

  //  first scenario with DOM manipulation is to handle if there is no input provided
  if (!guess) {
    message.textContent = 'No number provided; please guess a number!';
  } else if (guess === secretNumber) {
    message.textContent = 'You guessed the secret number! You win! 🥳';
    numberText.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    numberText.style.width = '30rem';
    if (highscore > score) {
      highscoreText.textContent;
    } else {
      highscore = score;
      highscoreText.textContent = score;
    }
    // when the guess is wrong; either too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = 'You lose! 😒';
    }
    //   } else if (guess > secretNumber) {
    //     message.textContent = 'Too high! 📈';
    //     // decrementing counter for score
    //     if (score > 1) {
    //       score--;
    //       scoreText.textContent = score;
    //     } else {
    //       message.textContent = 'You lose! 😒';
    //     }
    //   } else {
    //     message.textContent = 'Too low! 📉';
    //     if (score > 1) {
    //       score--;
    //       scoreText.textContent = score;
    //     } else {
    //       message.textContent = 'You lose! 😒';
    //     }
  }
}

// Again button
document.querySelector('.again').addEventListener('click', handleAgain);

function handleAgain() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberText.textContent = '?';
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  numberText.style.width = '15rem';
  scoreText.textContent = 20;
  guessText.text = 'Start guessing...';
  guessText.value = '';
}
