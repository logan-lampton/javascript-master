'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// forEach is one of the methods that a node list can use
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// -----------------------------------------------------------
// Manipulating Elements Practice

// Selecting Elements
// to apply CSS to the entire document, we must select the documentElement
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// returns an HTML collection, rather than a node list
// An HTML collection is known as a live collection, because if the DOM changes, the live collection changes automatically
console.log(allButtons);
document.getElementsByClassName('btn');

// Creating and inserting elements
// Programatic approach:
// Below is an object that we can represent in our DOM list
const message = document.createElement('div');
message.classList.add('.cookie-message');
// message.textContent = "We use cookies for improved functionality of the website"
message.innerHTML = `We use cookies for improved functionality of the website <button class="btn btn--close-cookie"> Got it! </button>`;
// Below for first child of header
// header.prepend(message);
// Below for last child of header
header.append(message);
// the append following the prepend, moves the element from the first to the last child
// SO we can move elements via these methods, not just insert them
// A DOM element can only exist in one place at a time
// To have a DOM element in more than one place, it must be cloned
// header.append(message.cloneNode(true));

// before places the element BEFORE that section of the DOM
// header.before(message);

// after places the element AFTER than section of the DOM
header.after(message);

// Deleting elements
// below removes the cookie message when the button is clicked
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
