'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
// weight in kg
// curFood in grams
// Formula for recommended food = (weight * 0.75) * 28
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// Task 2

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    sarahsDog.curFood > sarahsDog.recommendedFood ? 'too much' : 'not enough'
  }`
);

// My Version
// const sarahsDog = dogs.filter(dog => dog.owners.includes("Sarah"))
// const sarahReco = function (sarahsDog) {
//     return sarahsDog.curFood > sarahsDog.recommendedFood ? console.log("Eating too much") : console.log("Not eating enough")
// }

// console.log(dogs.some(w => w.weight === 22))
// console.log(dogs.filter(dog => dog.owners.includes("Sarah")))
// console.log(sarahReco(sarahsDog))

// Task 3

const ownersDogsEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

const ownersDogNotEnoughFood = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(dog => dog.owners)
  .flat();

console.log(ownersDogsEatTooMuch);
console.log(ownersDogNotEnoughFood);

// Task 4
console.log(`${ownersDogsEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownersDogNotEnoughFood.join(' and ')} dogs don't eat enough`);

// Task 5
// remember to use ===
const eatingRight = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(eatingRight);

// Task 6
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// Task 7
const okayDogs = dogs.filter(checkEatingOkay);

console.log(okayDogs);

// Task 8
const copyDogs = dogs.slice().sort((a, b) => {
  if (a.recommendedFood < b.recommendedFood) {
    return -1;
  } else if (a.recommendedFood > b.recommendedFood) {
    return 1;
  }
});

console.log(copyDogs);
