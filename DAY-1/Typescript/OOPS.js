// interface
// interface ICompany {
//   name: string;
//   city: string;
// }
// let company: ICompany = { name: "IBM", city: "Pune", xyz: 123 };
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// type Company = {
//   name: string;
//   city?: string; // optional
// };
// let company: Company = { name: "IBM", city: "Pune", xyz: 123 };
//let company: Company = { name: "IBM" };
// class
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car " + this.name + " is running @ " + this.speed + " kmph !";
    };
    return Car;
}());
// let carObj = new Car();
// carObj.accelerate();
// Inheritance
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, isArmed) {
        var _this = _super.call(this, name, speed) || this;
        _this.isArmed = false;
        _this.isArmed = isArmed;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + " Is the car armed ? " + this.isArmed;
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 300, true);
console.log(jbc.accelerate());
var Person = /** @class */ (function () {
    function Person() {
        this.generation = "X";
    }
    Person.prototype.walk = function () {
        console.log("Walking");
    };
    return Person;
}());
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
var EnhancedCar = /** @class */ (function () {
    function EnhancedCar(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    return EnhancedCar;
}());
var eCar = new EnhancedCar();
// Generics
function Swap(x, y) {
    var temp;
    temp = x;
    x = y;
    y = temp;
}
Swap(20, 30);
Swap("Hello", "World");
// var cars: string[] = ["XYZ", "PQR"];
var cars = new Array("XYZ", "PQR");
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
var Emp = /** @class */ (function () {
    function Emp(name) {
        if (name === void 0) { name = ""; }
        this.name = name;
    }
    return Emp;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Emp));
var SeniorManager = /** @class */ (function (_super) {
    __extends(SeniorManager, _super);
    function SeniorManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeniorManager;
}(Emp));
var Freelancer = /** @class */ (function () {
    function Freelancer() {
    }
    return Freelancer;
}());
var Enterprise = /** @class */ (function () {
    function Enterprise() {
    }
    return Enterprise;
}());
var enterprise = new Enterprise();
var company = new Enterprise();
var companiesWithFreelancer = new Enterprise();
var x = new Enterprise();
