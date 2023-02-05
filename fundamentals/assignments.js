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
