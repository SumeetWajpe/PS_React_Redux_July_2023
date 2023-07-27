// Argument types

function printBook(author: string, title: string): string {
  //   console.log(author, title);
  return "The book " + title + " is written by " + author;
}

console.log(printBook("Dr. APJ Abdul Kalam", "Wings of Fire"));

let x: string | number;
x = 100;
x = "Hello";
// Hands-on
// Add(x,y) -> accepts two numbers & returns either string(error) if x is zero or number (addition)

function Add(x: number, y: number): number | string {
  if (x === 0 || y === 0) {
    return "x or y can not be zero";
  }

  return x + y;
}
let result: number | string = Add(4, 5);
console.log(result);
