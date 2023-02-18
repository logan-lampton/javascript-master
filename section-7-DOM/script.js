'use strict';

// document is the entry point to the DOM

// DOM tree
// document => HTML => head and body => titles, sections, etc. => p, links, etc. => etc.

// DOM manipulation is not techincally part of JS
// DOM manipulation is part of web APIs that JS can manipulate
// no need to import anything

// document.querySelector('.message').textContent = "Correct Number 🥳"

// document.querySelector(".number").textContent = 13;

// document.querySelector(".guess").value = 19;

// The function is not called immediately, ONLY when the click occurs
document.querySelector('.check').addEventListener('click', handleClick);

function handleClick() {
  // the input is a string, so need to convert to a number
  const guess = Number(document.querySelector('.guess').value);

  //  first scenario with DOM manipulation is to handle if there is no input provided
  if (!guess) {
    document.querySelector('.message').textContent =
      'No number provided; please guess a number!';
  }
}

// Want to define the secret number just once, not each time the button is pressed
const secretNumber = Math.trunc(Math.random() * 20 + 1);
// returns a number between 1-20

let count = 0;

document.querySelector('.again').addEventListener('click', handleCounter);

function handleCounter() {
    count -= 1;
    console.log(count);
}
