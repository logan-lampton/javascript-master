'use strict';

function oppositeWords(string) {
  let reverseArray = [];
  const words = string.split(' ');
  words.forEach(word => {
    reverseArray += `${word.split('').reverse().join('')} `;
  });
  return reverseArray;
}

console.log(oppositeWords('Hello world'));
