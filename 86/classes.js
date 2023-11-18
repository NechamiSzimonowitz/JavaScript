class vehicle {
    constructor(color) {
        this.color = color;
    }
    go(speed) {
        this.speed = speed;
        console.log(`now driving at speed ${speed}`);
    }
    print() {
        console.log(`the ${this.color} is going at speed ${this.speed}`);
    }
}

class plane extends vehicle {
    constructor(color) {
        super(color);
    }

    go(speed) {
        this.speed = speed;
        console.log(`now flying at speed ${speed}`);
    }
}

const plane1 = new plane("red");
plane1.go("1000");
plane1.print();

const car = new vehicle("blue");
car.go("300");
car.print();