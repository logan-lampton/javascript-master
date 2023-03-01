'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// The reason that the callback click function can access the header variable is that it was declared at the same time as the initial function that turned the header red