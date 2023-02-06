// Functions
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} people. Its capital city is ${capitalCity}`;
    return description;
};
const america = describeCountry("United States of America", "331.9 million", "Washington DC");
console.log(america);