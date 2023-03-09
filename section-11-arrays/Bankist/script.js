'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Current Balance
// using reduce method
// My version
// immediatly set the balance property on the account object
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  labelBalance.textContent = `${account.balance}€`;
};

// Display movements
const displayMovements = function (movements) {
  // mov is the current value in the array that we are looping over, i is the index of that value
  movements.forEach(function (mov, i) {
    // variable for the ternary to see if the mov is a deposit or withdrawl
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // template literals are perfect for making blocks of HTML
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} €</div>
    </div>
    `;
    // insertAdjacentHTML method requires 2 arguments: 1. where we want to insert the HTML within the element it is being called on 2. the variable name for the HTML block that we want to insert
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // "afterend" shows the entries from last to first
  });
};

// Calculate Display Summary
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    // saying that the interest only kicks in on deposits where the interest would be at least one dollar
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

// Computing usernames
// username is just the first letter.toLowerCase() of each word in the name
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // to create a new property called username on each acc element in the existing array
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
// You run the function on the existing array
createUsernames(accounts);
// Then you console.log the original array to see the changes made to it with the forEach method
console.log(accounts);

// if we don't want to create a new array, it can be better to use a forEach loop

// It's bad practice to chain methods that mutate the original array
// Ex: Don't chain splice or reverse methods

// The Find Method
// The find method also takes a callback function
// The find method returns only the first thing that satisfies the conditions

// if the below is a one-line arrow function, I don't need to tell it to return the operation
const firstWithdrawl = account1.movements.find(mov => mov < 0);

// below is as a normal function
// const firstWithdrawl = account1.movements.find(function (mov) {
//   return mov < 0;
// });
console.log(firstWithdrawl);

// while similar to the filter method in some ways, the find method differs in other ways
// 1. Filter method filters ALL the elements that match the conditions; the find method only returns the first element that matches the condtions
// 2. The filter method returns a new array, while the find method ONLY returns the single element

// It is very useful to use the find method on arrays to find an object that matches a certain property (Example below is to search for a certain name of an account owner to return the object that includes that owner)
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// -----------------------------------------------------------------
// Login event handlers
let currentAccount;

// update UI
const updateUI = function (account) {
  // Call Display movements for the current account
  displayMovements(account.movements);
  // Call Display balance for the current account
  calcDisplayBalance(account);
  // Call Display summary for the current account
  calcDisplaySummary(account);
};

const handleLogin = function (e) {
  e.preventDefault();

  // the .value property grabs what is typed into the input field that the inputLoginUsername variable is assigned to
  // We are using the acc's username property that we created in the createUsernames function, since the username is what the user will be typing into that field
  // If no element matches the find condition, it returns: undefined
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // The below makes the input field lose focus (and remove the cursor)
    inputLoginPin.blur();

    // Update the UI
    updateUI(currentAccount);
  }
};
// by writing currentAccount?.pin (optional chaining) we will only read the pin property if the currentAccount exits. This removes the error that would otherwise be thrown

// hitting Enter in a form, will count as a click too
btnLogin.addEventListener('click', handleLogin);

// transfer between accounts
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  // Make sure that the user has the money to transfer
  // using optional chaining with the recieverAccount to see if it exists before checking its username not equal to the current username
  // recieverAccount tests that the username is saved as an account
  if (
    amount > 0 &&
    recieverAccount &&
    currentAccount.balance >= amount &&
    recieverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // If the ammount is greater than 0 and the current account has a ANY movement greater or equal to 10% of the loan amount being requested
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add the movement
    currentAccount.movements.push(amount);
    // Update the UI
    updateUI(currentAccount);
  }
  // clear the loan input box after the click
  inputLoanAmount.value = '';
});

// Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // delete account
    accounts.splice(index, 1);
    // indexOf can only search for a value THAT IS IN THE ARRAY
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value && inputClosePin.value === '';
});
