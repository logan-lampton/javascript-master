'use strict';

// classes are still functions

// class expression
// const PersonCL = class {}

// class declaration
class PersonCl {
  // the constructor is a method of the class
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}!`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // test to see if the fullName provided has a first and last name
  // this._ is just a naming convention, not a rule
  // we are creating a new fullName variable with this._
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name (needs a first and last name)`);
    }
  }
  //   the getter function allows the setter variable to update the original variable
  // Otherwise fullName is undefined
  get fullName() {
    return this._fullName;
  }

  // can add static methods with the static keyword
  static hello() {
    console.log('Hello, friend! 😁');
  }
}

const jessica = new PersonCl('Jessica Landrey', 1989);
console.log(jessica);
jessica.calcAge();

// Classes in ES6 are the same as the .prototype properties, it just looks nicer (syntactic sugar)

// the below is the same as the greet method in the PersonCl class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}!`);
// };
jessica.greet();

console.log(jessica.age);
console.log(jessica.fullName);

// classes are NOT hoisted (unlike function declarations)
// classes are first-class citizens; meaning, they can be passed into functions and also be returned from functions, because classes are just a special type of function
// the body of a class is ALWAYS executed in strict mode

// /////////////////////////////////////////////////
// Getters and Setters

// functions that get and set a value, but still look like regular properties

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  // to turn into a getter, simply prepend "get"
  get latest() {
    return this.movements.slice(-1).pop();
  },
  // each setter must have exactly one argument
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// setters are called like any other property
account.latest = 600;
console.log(account.movements);

const walter = new PersonCl('Walter Cronchite', 1965);
// console.log(walter);

// You don't have to use getters and setters, but they can help a lot with validations

// /////////////////////////////////////////////////
// Static Methods
// methods ONLY AVAILABLE on the constructor, not their prototype objects

// can add without the prototype syntax to JUST the constructor
PersonCl.hey = function () {
  console.log('Hey there 👋');
};
PersonCl.hey();
// can't call on a constructor's prototype instances
// jessica.hey();

PersonCl.hello();

// /////////////////////////////////////////////////
// Object.create

// use an object literal
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  // manual way of initializing the object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah);

// /////////////////////////////////////////////////
// Inheritance Between "Classes" Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Object.create makes an empty object, so we need to make the connection between Student.prototype and Person.prototype before we start adding any methods, like the introduce method after this
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2006, 'Computer Science');
console.log(mike);
mike.introduce();
console.log(mike.__proto__);

// ////////////////////////////////////////
// ES6 Inheritance Between Classes

// use extends keyword to make the StudenCl class inherit the PersonCl class
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // use the super keyword to make the constructor have the same prototype as PersonCl
    // use the same parameters as the parent constructor
    // super call NEEDS to happen first; it allows you to access the this keyword
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`Hi, my name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    const date = new Date().getFullYear();
    console.log(
      `I'm ${date - this.birthYear} years old, but I feel ${
        date - this.birthYear + 10
      } years old`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2003, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

// //////////////////////////////////////////
// Object.create Inheritance Between "Classes"

// makes StudentProto inherit from PersonProto
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// jay's prototype will inherit from both StudentProto and PersonProto
const jay = Object.create(StudentProto);
console.log(jay);
jay.init('Jay', 2004, 'Computer Science');
jay.calcAge();

// //////////////////////////////////////////
// Another Class Example

class Account {
  //   Public fields (instances)
  //   can be referenced by the this keyword
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  //   Public methods
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // we can add any additional properity not passed in as a parameter, that we want
    // _ is a convention to mark a variable as private
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  //   getter if preferred method
  //   get movements() {
  //     return this._movements;
  //   }
  // usually use methods that say get or set instead of actual getters and setters
  getMovements() {
    return this.#movements;
  }
  //   much better to use methods, than call properties on instances
  deposit(amount) {
    this.#movements.push(amount);
    return this;
  }
  withdraw(amount) {
    this.deposit(-amount);
    return this;
  }
  total() {
    let sum = 0;
    this.#movements.forEach(mov => (sum += mov));
    return sum;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved!');
      return this;
    }
  }
  //   Private methods
  // Only works at all on Google Chrome for now
  #approveLoan(val) {
    if (val <= this.total() * 5) {
      return true;
    } else {
      return false;
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

// API calls
acc1.deposit(120);
// abstracts that the withdraw is a negative value
acc1.withdraw(40);

acc1.requestLoan(75);

console.log(acc1.getMovements());

console.log(acc1);

// //////////////////////////////////////////
// Private Class Fields

// In OOP languages, properties are called fields

// Public fields
// Private fields
// Public methods
// Private methods

// //////////////////////////////////////////
// Chaining Methods
// as long as each method in the constructor has a return value, you can chain them
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500);

console.log(acc1.getMovements());
