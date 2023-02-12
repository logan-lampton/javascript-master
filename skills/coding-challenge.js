// Given an array of forecasted maximum temperatures the thermometer displays a string. Create a function 'printForecast' which takes in an array 'arr' and logs a string to the console.

function printForecast(arr) {
    let str = "";
    for (i = 0; i < arr.length; i++) {
        //str += is the same as str = str + etc...
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log("... " + str);
};

const array1 = [17, 21, 23];

printForecast(array1);