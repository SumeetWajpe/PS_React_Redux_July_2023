// interface
// interface ICompany {
//   name: string;
//   city: string;
// }
// let company: ICompany = { name: "IBM", city: "Pune", xyz: 123 };

type Company = {
  name: string;
  city?: string; // optional
};
// let company: Company = { name: "IBM", city: "Pune", xyz: 123 };
let company: Company = { name: "IBM" };

// class
class Car {
  //private id: number;
  public name: string;
  public speed: number;

  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): void {
    console.log(
      "The car " + this.name + " is running @ " + this.speed + " kmph !",
    );
  }
}

// let carObj = new Car();
// carObj.accelerate();

// Inheritance
class JamesBondCar extends Car {
  isArmed: boolean;
  constructor(name: string, speed: number, isArmed: boolean) {
    super(name, speed);
  }
}

let jbc = new JamesBondCar("Aston Martin", 300, true);

jbc.accelerate();
