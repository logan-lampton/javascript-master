'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

const BMW = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
const ford = new Car('Ford', 100);

ford.accelerate();
mercedes.accelerate();
BMW.accelerate();

console.log(ford);
console.log(BMW);
console.log(mercedes);

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

ford.brake();
mercedes.accelerate();
BMW.accelerate();
