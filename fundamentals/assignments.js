// Values and Variables
const country = "USA";
const continent = "North America";
let population = 332000000;

// console.log(country, continent, population);

// Data Types
const isIsland = false;
let language;

// console.log(
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// );

// let, const and var
language = "English";

// Basic Operators
const halfPopulation = population / 2;
const populationPlusOne = population + 1;
// console.log(populationPlusOne);

const finlandPopulation = 6000000;
const populationComparision = population > finlandPopulation;
// console.log(populationComparision);

const averageCountryPopulation = 33000000;
const globalPopulationComparison = population > averageCountryPopulation;
// console.log(globalPopulationComparison);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

// If/Else Statements
if (population > averageCountryPopulation) {
  console.log(`${country}'s population is above the global average.`);
} else {
  console.log(
    `${country}'s popluation is ${
      averageCountryPopulation - population
    } less than the global average.`
  );
}

// Type Conversion and Coercion
"9" - "5";
// results in a number due to -
"19" - "13" + "17";
// results in a string due to +
"19" - "13" + 17;
// results in a number, since the + is adding a number
"123" < 57;
// results in false, since a string is lower in numrical value than 57
5 + 6 + "4" + 9 - 4 - 2;
// results in a number, but with a much different value than the math would be, since we added a string

// Equality Operators: == vs. ===
// const numNeighbors = prompt("How many countries share a border with yours?");
// if(Number(numNeighbors) === 1) {
//   console.log("Only 1 border!");
// } else if(numNeighbors > 1) {
//   console.log("Nice, more than 1 neighbor!");
// } else {
//   console.log("No neighbors; so lonely!");
// };

// Logical Operators
if(population < 50000000 && language === "English") {
  console.log(`You should live in ${country}`);
} else {
  console.log(`Sounds like ${country} might not be for you`);
};

// The Switch Statement
switch(language) {
  case "Chinese":
  case "Mandarin":
    console.log("Most spoken language in the world!");
  break;
  case "Spanish":
    console.log("Second most spoken language!");
  break;
  case "English":
    console.log("Third most spoken language!");
  break;
  case "Hindi":
    console.log("Fourth most spoken language!");
  break;
  case "Arabic":
    console.log("Fifth most spoken language!");
  break;
  default:
    console.log("That's a nice language :-)");
  break;
};