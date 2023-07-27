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
// let company: Company = { name: "IBM", city: "Pune", xyz: 123 };
var company = { name: "IBM" };
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
