function Vehicle(color) {
    this.color = color;
}
Vehicle.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`now going at speed ${speed}`);
}
Vehicle.prototype.print = function () {
    console.log(`the ${this.color} vehicle is going speed ${this.speed} `);
}

function Plane(color) {
    this.color = color;
}
Plane.prototype = Object.create(Vehicle.prototype);

Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(`now flying at speed ${speed} `)
}

const vehicle1 = new Vehicle('red');
vehicle1.go('150');
vehicle1.print();

const plane1 = new Plane('green');
plane1.go('1000');
plane1.print();
