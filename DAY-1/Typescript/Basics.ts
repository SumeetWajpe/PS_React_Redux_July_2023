//let str = "Hello Typescript !"; // Type Inference
// str = 100;

let str: string;
str = "Hello Typescript !"; // Type annotation
console.log(str);

let n: number = 100;
let b: boolean = true;
let x; // implicitly typed as any (bad)
x = 10;
x = true;
x = [];
x = {};
