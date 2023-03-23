'use strict';

class Car {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate () {
        this.speed += 10;
    }
    brake () {
        this.speed = this.speed - 5;
    }
    get speedUS () {
        return this.speed / 1.6;
    }
    set speedUS (speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new Car("Ford", 120);
ford.accelerate();
ford.brake();
console.log(ford)
console.log(ford.speedUS)
ford.speedUS = 50;
console.log(ford)