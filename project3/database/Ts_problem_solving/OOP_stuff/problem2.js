//2. Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting.  
var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " ").concat(this.year, " is starting"));
    };
    return Bus;
}());
var bus1 = new Bus('BMW', '23MM', "2004");
console.log(bus1.make, bus1.model, bus1.year);
bus1.start();
