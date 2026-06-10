//1. Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.
var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Bus;
}());
var bus1 = new Bus('BMW', '23MM', "2004");
console.log(bus1.make, bus1.model, bus1.year);
