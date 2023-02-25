'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelector would only select the first .show-modal; querySelectorAll selects them all
const btnsOpenModal = document.querySelectorAll('.show-modal');

// "opening" the modal function
const openModal = function () {
  // ".hidden" is only for the selector
  modal.classList.remove('hidden');
  // the overlay is a blur in the CSS hidden in the HTML on load
  overlay.classList.remove('hidden');
};

// "opening" the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// "closing" the modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// "closing" the modal with the button "X"
modal.addEventListener('click', closeModal);

// "closing" the modal by clicking anywhere in the overlay
overlay.addEventListener('click', closeModal);

// "closing" the modal with a key press
document.addEventListener('keydown', function (e) {
  // if the key is "esc" and the modal class IS NOT hidden, run the closeModal function
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // NEED TO CALL THE CODE HERE
    closeModal();
  }
});

// how to see the information on any key pressed
document.addEventListener('keydown', function (e) {
  console.log(e);
});
