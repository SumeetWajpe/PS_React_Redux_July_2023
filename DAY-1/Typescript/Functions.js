// Argument types
function printBook(author, title) {
    //   console.log(author, title);
    return "The book " + title + " is written by " + author;
}
console.log(printBook("Dr. APJ Abdul Kalam", "Wings of Fire"));
var x;
x = 100;
x = "Hello";
// Hands-on
// Add(x,y) -> accepts two numbers & returns either string(error) if x is zero or number (addition)
function Add(x, y) {
    if (x === 0 || y === 0) {
        return "x or y can not be zero";
    }
    return x + y;
}
var result = Add(4, 5);
console.log(result);
