// Argument types
var _this = this;
// function printBook(author: string, title: string): string {
//   //   console.log(author, title);
//   return "The book " + title + " is written by " + author;
// }
// console.log(printBook("Dr. APJ Abdul Kalam", "Wings of Fire"));
// let x: string | number;
// x = 100;
// x = "Hello";
// Hands-on
// Add(x,y) -> accepts two numbers & returns either string(error) if x is zero or number (addition)
// function Add(x: number, y: number): number | string {
//   if (x === 0 || y === 0) {
//     return "x or y can not be zero";
//   }
//   return x + y;
// }
// let result: number | string = Add(4, 5);
// console.log(result);
// Optional parameters
// function Add(x?: number, y?: number) {
//   console.log(x, y);
// }
// Add();
// Default Parameters
// function Add(x: number = 0, y: number = 0) {
//   console.log(x, y);
// }
// Add();
// Add(20, 10);
// function printBook(author: string, ...titles: string[]) {
//   console.log(author, titles);
// }
// printBook("Dr. APJ Abdul Kalam", "Ignited minds", "Wings Of Fire");
// let Square = (x: number): number => x * x;
// let cars: string[] = ["BMW", "AUDI", "MERC"];
// cars.forEach((car: string) => console.log(car));
// constructor
function Emp() {
    var _this = this;
    this.salary = 200000;
    setTimeout(function () {
        console.log(_this.salary);
    }, 3000);
}
var e = new Emp();
var EmpAsArrow = function () {
    console.log(_this);
    _this.salary = 500000;
};
var empArrow = new EmpAsArrow();
