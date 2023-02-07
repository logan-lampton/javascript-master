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

// Function Declarations vs. Expressions
// function declaration example
function percentageOfWorld1(population) {
    return population / 7900 * 100;
};
const chinaPopulation = percentageOfWorld1(1441);
const usaPopulation = percentageOfWorld1(1408);
const indiaPopulation = percentageOfWorld1(332);
console.log(chinaPopulation, usaPopulation, indiaPopulation);

// function expression example
const percentageOfWorld2 = function(population) {
    return population / 7900 * 100;
};
const chinaPopulation2 = percentageOfWorld2(1441);
const usaPopulation2 = percentageOfWorld2(1408);
const indiaPopulation2 = percentageOfWorld2(332);
console.log(chinaPopulation2, usaPopulation2, indiaPopulation2);

