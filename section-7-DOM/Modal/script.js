'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelector would only select the first .show-modal; querySelectorAll selects them all
const btnsOpenModal = document.querySelectorAll('.show-modal');

// "opening" the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    // ".hidden" is only for the selector
    modal.classList.remove('hidden');
    // the overlay is a blur in the CSS hidden in the HTML on load
    overlay.classList.remove('hidden');
  });
}

// "closing" the modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// "closing" the modal
modal.addEventListener('click', closeModal);

// "closing" the modal by clicking anywhere in the overlay
overlay.addEventListener('click', closeModal);
