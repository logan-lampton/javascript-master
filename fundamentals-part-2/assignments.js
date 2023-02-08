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
if(!neighbors.includes("Germany")) {
  console.log("Probably not a central European country :D");
};
neighbors[neighbors.indexOf("Cuba")] = "Super Cuba";
console.log(neighbors);
// ----------------------------------------------------------------------------