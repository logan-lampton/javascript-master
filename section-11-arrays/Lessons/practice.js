'use strict';

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

// Exercise # 1
const bankDepositSum = accounts
  .map(account => account.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
// could also use flatMap method instead of map and flat methods seperately
console.log(bankDepositSum);

// Exercise # 2
// return the number of deposits at least 1000€

// using filter method
const numDeposits1000 = accounts
  .flatMap(account => account.movements)
  .filter(acc => acc >= 1000).length;

// using reduce method
// Alongside counter and ternary function
// note the ++count, so that the updated value is returned each time, unlike count++
const deposits1000 = accounts
  .flatMap(account => account.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);
console.log(deposits1000);

// Lesson on ++
let a = 10;
console.log(a++);
// Note that a is still 10
console.log(a);
// The second console log updates a to 11; this is because ++ increases the value and returns the value before it was iterated
console.log(++a);
// ++ before the variable iterates it and returns the iterated value, instead of the value before the operation

// Reduce method can be used for just about anything!

// Exercise #3
// Create an object which contains the sum of the deposits and the sum of the withdrawls
// for a reduce method YOU MUST RETURN THE ACCUMULATOR
// Note that we destructured the variables for deposits and withdrawls right away
const { deposits, withdrawls } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum.deposits += cur) : (sum.withdrawls += cur);
      return sum;
    },
    { deposits: 0, withdrawls: 0 }
  );
console.log(deposits, withdrawls);

// could refactor as such:
const total = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sum, cur) => {
      sum[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
      return sum;
    },
    { deposits: 0, withdrawls: 0 }
  );
console.log(total);
