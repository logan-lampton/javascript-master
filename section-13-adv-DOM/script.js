'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

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

///////////////////////////////////////
// Smooth scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // scrolls to the position of section1 variable
  // NEED to make sure that you take the current scroll position in mind (the pageYOffset and pageXOffset)

  // smoothing the scroll - Old school way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  // });

  // modern way for modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page Navigation

// Naive solution that creates a copy of an event listener function on each nav link
// returns a node list
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// BETTER Event Delegation Methodology
// 1. Add event listener to a common parent element
// 2. In that event listener, determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  // Makes sure that not the entire navbar, only the links are part of the event listener
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// The best practice is to add the eventListener to the parent of all the button elements
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // guard clause
  if(!clicked) return
  // remove active from the other tabs
  tabs.forEach(t => t.classList.remove("operations__tab--active"))
  // make the tab associated with the clicked button active
  clicked.classList.add("operations__tab--active");
  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
});

// // A forEach loop works, but is bad practice as it would make copies of the callback function for each button and on a big website (ex 200 buttons) that it would slow down the page
// tabs.forEach(t => t.addEventListener("click", () => console.log("DISPLAY TAB")))

///////////////////////////////////////
// DOM Traversing
// const h1 = document.querySelector('h1');

// // selecting child elements
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// // Note: Nodes can be anything
// console.log(h1.children);
// // returns nodes that are part of the HTMLCollection
// h1.lastElementChild.style.color = 'white';
// // properties like .firstElementChild and .lastElementChild are built in

// // Going upwards, towards parent nodes and elements
// console.log(h1.parentNode);
// // returns header__title
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // querySelector finds children; closest method finds parents - both no matter how far down or up in the DOM tree

// // Going sideways to siblings
// // JS only lets you select direct siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// // a way to get all the siblings of an element from accessing its parent
// console.log(h1.parentElement.children);

// // can spread into an array
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// -----------------------------------------------------------
// // Manipulating Elements Practice

// // Selecting Elements
// // to apply CSS to the entire document, we must select the documentElement
// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// // console.log(allSections);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// // returns an HTML collection, rather than a node list
// // An HTML collection is known as a live collection, because if the DOM changes, the live collection changes automatically
// // console.log(allButtons);
// document.getElementsByClassName('btn');

// // Creating and inserting elements
// // Programatic approach:
// // Below is an object that we can represent in our DOM list
// const message = document.createElement('div');
// // DON'T ADD THE PERIOD IN THE CLASS FOR classList
// message.classList.add('cookie-message');
// // message.textContent = "We use cookies for improved functionality of the website"
// message.innerHTML = `We use cookies for improved functionality of the website <button class="btn btn--close-cookie"> Got it! </button>`;
// // Below for first child of header
// // header.prepend(message);
// // Below for last child of header
// // header.append(message);
// // the append following the prepend, moves the element from the first to the last child
// // SO we can move elements via these methods, not just insert them
// // A DOM element can only exist in one place at a time
// // To have a DOM element in more than one place, it must be cloned
// // header.append(message.cloneNode(true));

// // before places the element BEFORE that section of the DOM
// // header.before(message);

// // after places the element AFTER than section of the DOM
// header.after(message);

// // Deleting elements
// // below removes the cookie message when the button is clicked
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', () => message.remove());

// // -----------------------------------------------------------
// // Styles lesson
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// message.style.color = 'white';

// // console logging the style will only work for inline styles that we set ourselves
// // console.log(message.style.color);

// // to grab styles that are set, but are not inline styles (so ones we set), we have to use the getComputedStyle method

// // console.log(getComputedStyle(message));

// // computed style is how the code appears on the page, even if we didn't give any specifications in the CSS file

// // using Number.parseInt because we want to add a number to a string
// // need to add ", 10" to the end of the parseInt method to signify that we are parsing to a base 10 number
// message.style.height =
//   Number.parseInt(getComputedStyle(message).height, 10) + 30 + 'px';

// // How to change variables in CSS using JS
// // The document in JS is equivalant to the root in CSS
// // document.documentElement.style.setProperty('--color-primary', 'orangered');
// // makes all CSS elements that used the --color-primary variable to orangered, instead of green

// // ---------------------------------------------------------
// // Attributes
// const logo = document.querySelector('.nav__logo');
// // JS only creates attributes for standard HTML properties, such as alt and src
// console.log(logo.alt);
// console.log(logo.src);
// // JS won't create attributes automatically for something we create uniquely, such as the nonstandard, made-up "designer" property
// console.log(logo.designer);
// // returns undefined
// // to get the class name, you have to write the following format:
// console.log(logo.className);

// // updating the alt
// logo.alt = 'Beautiful minimalist logo';

// // Non-standard attributes
// // You can grab the attribute with the following syntax
// console.log(logo.getAttribute('designer'));

// // creating a non-standard attribute
// logo.setAttribute('company', 'Bankist');
// // the above creates an attribute for logo of "company" with the value of "Bankist"

// // absolute vs. relative value of attribute
// // for absolute value:
// console.log(logo.src);
// // for relative value of the attribute:
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data Attributes
// // Data attributes are a special type of attribute that starts with "data"
// // the data attributes are always saved into the dataset object
// // Note that versionNumber, is the name we gave in the CSS doc, in camelCase
// console.log(logo.dataset.versionNumber);

// // Classes
// // the class names below are just filler
// logo.classList.add('c', 'second_class');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// don't use this syntax
// logo.className = "Jonas"
// That method would overwrite any other styles and make it so the element can only have one class

// const headerAlert = function (e) {
//   alert("addEventListener: Hey! You're reading the header!");

//   // This will make it so it only triggers on the first mouseenter, as it will then be removed
//   h1.removeEventListener('mouseenter', headerAlert);
// };

// // Types of Events and Event Handlers
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', headerAlert);
// // As a reminder, there are many events that can trigger an eventListener, which can be researched on MDN

// // OLD, Not as good way, for reference
// // h1.onmousenter = function (e) {
// //   alert("onmouseenter: Hey! You're reading the header!")
// // }

// // You can also remove an event listener with a timer
// setTimeout(() => h1.removeEventListener("mouseenter", headerAlert), 3000)

// --------------------------------------------------------
// Event Propagation in Practice

// // Creating a random color
// // create a random integer
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// // Create a random color utilizing the random integer formula
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor());

// // event listener for the nav links
// // The first nav link
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // this always refers to the element that the event is attached to
//   this.style.backgroundColor = randomColor();
// });
// // all the nav links block, including "open account" button
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// // entire navbar, including logo
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// // adding ", true" at the end makes the app listen for the event during the Capture Phase.
// // This makes it happen first
// // set to false by default
// // capture is really only for legacy code

// // Note how clicking on the child element also bubbles up the color change to its parents as well
// // For all 3 handlers, the target event is the same
// // e.currentTarget is the same as the this keyword in ALL event handlers

// // to make sure that the event never bubbles to its parents, use e.stopPropagation(); ONLY the child you selected will do the event
// // YOU PROBABLY SHOULDN'T STOP PROPAGATION IN MOST CURCUMSTANCES

// // addEventListener is listening for events during the BUBBLING PHASE, NOT THE CAPTURE PHASE
// // This is because the capture phase is not usually useful in JS
