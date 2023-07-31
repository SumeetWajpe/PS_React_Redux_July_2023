// interface

let c = { name: "IBM", city: "Pune", xyz: 123, pqr: 123456 };

// class
class Car {
  // private id: number;
  public name: string;
  public speed: number;

  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): string {
    return "The car " + this.name + " is running @ " + this.speed + " kmph !";
  }
}

// let carObj = new Car();
// carObj.accelerate();

// Inheritance
class JamesBondCar extends Car {
  isArmed: boolean = false;
  constructor(name: string, speed: number, isArmed: boolean) {
    super(name, speed); // a call to base class constructor
    this.isArmed = isArmed;
  }
  accelerate(): string {
    return super.accelerate() + " Is the car armed ? " + this.isArmed;
  }
}

let jbc = new JamesBondCar("Aston Martin", 300, true);

console.log(jbc.accelerate());

// interface IHuman {
//   generation: string;
// }

// interface IPerson {
//   name: string;
//   age: number;
//   walk: () => void;
//   run?: () => void; //optional
// }

// class Person implements IPerson, IHuman {
//   generation: string = "X";
//   name: string;
//   age: number;
//   walk() {
//     console.log("Walking");
//   }
// }

interface IHuman {
  generation: string;
}

interface IPerson extends IHuman {
  name: string;
  age: number;
  walk: () => void;
  run?: () => void; //optional
}

class Person implements IPerson {
  generation: string = "X";
  name: string;
  age: number;
  walk() {
    console.log("Walking");
  }
}

// Enhanced class syntax

// class Car {
//   // private id: number;
//   public name: string;
//   public speed: number;

//   constructor(name: string = "BMW", speed: number = 200) {
//     this.name = name;
//     this.speed = speed;
//   }
// }

// OR
class EnhancedCar {
  constructor(public name: string = "BMW", public speed: number = 200) {}
}

var eCar = new EnhancedCar();

// Generics

function Swap<T>(x: T, y: T) {
  let temp: T;
  temp = x;
  x = y;
  y = temp;
}

Swap<number>(20, 30);
Swap<string>("Hello", "World");

// var cars: string[] = ["XYZ", "PQR"];

var cars: Array<string> = new Array<string>("XYZ", "PQR");

// class Emp {
//   constructor(public name: string = "") {}
// }

// var company: Array<Emp> = new Array<Emp>(new Emp("John"), new Emp("Jim"));

// class Point<T, V> {
//   x: T;
//   y: V;
// }

// let point = new Point<number, string>();

// function printName<T>(firstName: T, lastName: T) {
//   let fullName: T;
//   fullName = (firstName + " " + lastName) as T;
//   console.log("printName>>" + fullName);
// }
// printName<string>("renu", "yadav");

//  Generics with Constraints
class Emp {
  constructor(public name: string = "") {}
}

class Manager extends Emp {}

class SeniorManager extends Emp {}

class Freelancer {}

class Enterprise<T extends Emp> {
  employees: T[];
}

var enterprise = new Enterprise<Manager>();
var company = new Enterprise<SeniorManager>();
var companiesWithFreelancer = new Enterprise<Freelancer>();
var x = new Enterprise<string>();
