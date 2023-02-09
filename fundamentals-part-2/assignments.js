// Functions
function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} people. Its capital city is ${capitalCity}`;
  return description;
}
const america = describeCountry(
  "United States of America",
  "331.9 million",
  "Washington DC"
);
console.log(america);
// ----------------------------------------------------------------------------

// Function Declarations vs. Expressions
// function declaration example
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const chinaPopulation = percentageOfWorld1(1441);
const indiaPopulation = percentageOfWorld1(1408);
const usaPopulation = percentageOfWorld1(332);
console.log(chinaPopulation, indiaPopulation, usaPopulation);

// function expression example
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const chinaPopulation2 = percentageOfWorld2(1441);
const indiaPopulation2 = percentageOfWorld2(1408);
const usaPopulation2 = percentageOfWorld2(332);
console.log(chinaPopulation2, indiaPopulation2, usaPopulation2);
// ----------------------------------------------------------------------------

// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const chinaPopulation3 = percentageOfWorld3(1441);
const indiaPopulation3 = percentageOfWorld3(1408);
const usaPopulation3 = percentageOfWorld3(332);
console.log(chinaPopulation3, indiaPopulation3, usaPopulation3);
// ----------------------------------------------------------------------------

// Functions Calling Other Functions
function describePopulation(country, population) {
  const percent = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percent} of the world`;
}
const chinaPopulation4 = describePopulation("China", 1441);
const indiaPopulation4 = describePopulation("India", 1408);
const usaPopulation4 = describePopulation("United States of America", 332);
console.log(chinaPopulation4, indiaPopulation4, usaPopulation4);
// ----------------------------------------------------------------------------

// Introduction to Arrays

const populations = [1441, 1408, 332, 213];
console.log(populations.length >= 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
// ----------------------------------------------------------------------------

// Basic Array Operations (Methods)
const neighbors = ["Canada", "Mexico", "Bahamas", "Cuba"];
neighbors.push("Utopia");
neighbors.pop();
if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbors[neighbors.indexOf("Cuba")] = "Super Cuba";
console.log(neighbors);
// ----------------------------------------------------------------------------

// Intro to Objects
const myCountry = {
  country: "The United States of America",
  capital: "Washington DC",
  language: "English",
  population: 331.9,
  neighbors: ["Canada", "Mexico", "Bahamas", "Cuba"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital named ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
  },
};

// ----------------------------------------------------------------------------

// Dot vs. Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital named ${myCountry.capital}.`);
const dotNotation = (myCountry.population += 2);
console.log(dotNotation);
const bracketsNotation = (myCountry["population"] -= 2);
console.log(bracketsNotation);
// ----------------------------------------------------------------------------

// Object Methods
myCountry.describe();
// checkIsland has to run before you can log the result
myCountry.checkIsland();
console.log(myCountry.isIsland);
// ----------------------------------------------------------------------------

// Iteration: The for Loop
for (let vote = 1; vote <= 50; vote++) {
  // console.log(`Voter number ${vote} is currently voting`);
}
// ----------------------------------------------------------------------------

// Looping Arrays, Breaking and Continuing
const populations2 = [1441, 1408, 332, 213];
const percentages2 = [];
for(i = 0; i < populations2.length; i++) {
  percentages2.push(percentageOfWorld1(populations2[i]));
};
console.log(percentages2)


// ----------------------------------------------------------------------------

// Looping Backwards and Loops in Loops

// ----------------------------------------------------------------------------

// The while Loop
