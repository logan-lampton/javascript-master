// Given an array of forecasted maximum temperatures the thermometer displays a string. Create a function 'printForecast' which takes in an array 'arr' and logs a string to the console.

function printForecast(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(`... ${arr[i]} in ${i + 1} days`);
    }
};

const array1 = [17, 21, 23];

printForecast(array1);