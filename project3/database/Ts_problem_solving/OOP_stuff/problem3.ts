//3. Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly.  


class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class SUV extends Car {
  offRoadCapable: boolean;

  constructor(
    offRoadCapable: boolean,
    make: string,
    model: string,
    year: number
  ) {
    super(make, model, year);
    this.offRoadCapable = offRoadCapable;
  }

  toggleOffRoadMode() {
    if (this.offRoadCapable) {
      console.log(`The ${this.make} ${this.model} is now in off-road mode.`);
    } else {
      console.log(`The ${this.make} ${this.model} is not suitable for off-road driving.`);
    }
  }
}

const Rammi = new SUV(false, "BMW", "1234RRAA", 2002);

console.log(Rammi);
Rammi.toggleOffRoadMode();







 


