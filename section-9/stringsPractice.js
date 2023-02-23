'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split("+"))

// my solution
for (const flight of flights.split('+')) {
  const flightDetails = flight.split(';');
  const delayed = `🔴 ${flightDetails[0]
    .slice(1)
    .replace('_', ' ')
    .padStart(10)}`;
  if (flightDetails[0].includes('Delayed')) {
    console.log(
      `${delayed} from ${flightDetails[1]
        .slice(0, 3)
        .toUpperCase()} to ${flightDetails[2].slice(0, 3).toUpperCase()} (${
        flightDetails[3].replace(":", "h")
      })`
    );
  } else {
    console.log(
      `${flightDetails[0].slice(1).padStart(10)} from ${flightDetails[1]
        .slice(0, 3)
        .toUpperCase()} to ${flightDetails[2].slice(0, 3).toUpperCase()} (${
        flightDetails[3].replace(":", "h")
      })`
    );
  }
}

// Output expected
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// ---------------------------------------------------------------------------------------------------------------------------
// Instructor solution

// refactor to avoid repeating in the for loop below
const getCode = str => str.slice(0, 3).toUpperCase();


for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(";")
  const output = `${type.startsWith("_Delayed") ? `🔴` : "" } ${type.replaceAll("_", " ")} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(30)
  console.log(output);
}
