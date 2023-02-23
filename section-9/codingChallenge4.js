'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.addEventListener('click', handleClick);

// Instructor version + my flourishes
function handleClick() {
    const text = document.querySelector('textarea').value;
    const lowerCase = text.toLowerCase();
    // \n is the character for new rows
    const rows = lowerCase.split('\n');
    for(const [i, row] of rows.entries()) {
      const [first, second] = row.trim().split("_")
      const camelCase = `${first}${second.replace(second[0], second[0].toUpperCase())}`
      console.log(`${camelCase.padEnd(20)}${"✅".repeat(i + 1)}`)
    }
  }


// test data
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

// My version
// function handleClick() {
//   const text = document.querySelector('textarea').value;
//   const lowerCase = text.toLowerCase();
//   // \n is the character for new rows
//   const rows = lowerCase.split('\n');
//   rows.forEach(word => {
//     const splitWords = word.trim().split("_")
//     const camelCase = splitWords[0] + splitWords[1][0].toUpperCase() + splitWords[1].slice(1);
//     const individualCamelCase = camelCase.split("\n");
//     const combined = individualCamelCase.join(" ")
//     console.log(combined)
//   })
// }
