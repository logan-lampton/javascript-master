const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const promptResponse = prompt(`${this.question}
    ${this.options[0]}
    ${this.options[1]}
    ${this.options[2]}
    ${this.options[3]}
    `);
    if (promptResponse < 0 || promptResponse > 3 || isNaN(promptResponse)) {
      console.log('Please enter a valid number between 0-3');
    } else {
      this.answers[promptResponse]++;
      this.displayResults();
    }
  },
  displayResults(type = 'array') {
    if (type !== 'array') {
      console.log(`Poll results are ${this.answers}`);
    } else {
      console.log(this.answers);
    }
  },
};

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 1. Create a method called "registerNewAnswer" on the "poll" object. The method does 2 things:
// 1.1 Display a prompt window for the user to input the number of the selected option
// 1.2 Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (Ex: answer 52 wouldn't make sense)

// 2. Call this method whenever the user clicks the "Answer poll button"

// 3. Create a method "displayResults" which displays the poll results
// The mthod takes a string as an input (called "type") which can either be a "string" or an "array".
// If type is "array", simply display the results array as it is, using console.log(). This should be the default option.
// If type is "string", display a string like, "Poll results are 13, 2, 4, 1"

// 4. Run the "displayResults method at the end of each "registerNewAnswer" method call

// INSTRUCTOR ANSWERS
const poll2 = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(
          '\n'
        )}\n Please submit the number corresponding to your favorite language`
      )
    );
    // Register the answer
    // short circuit with the && operator
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// .join(\n) will join the elements together with a enter break between each element

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS
// use .call()
// Create a new answers object in the call method
// You can add in an arguement of "string" for the displayResults
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
