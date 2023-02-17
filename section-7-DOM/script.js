'use strict';

// document is the entry point to the DOM

// DOM tree
// document => HTML => head and body => titles, sections, etc. => p, links, etc. => etc.

// DOM manipulation is not techincally part of JS
// DOM manipulation is part of web APIs that JS can manipulate
// no need to import anything

document.querySelector('.message').textContent = "Correct Number 🥳"

document.querySelector(".number").textContent = 13;

document.querySelector(".guess").value = 19;