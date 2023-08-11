import fs from "fs";

// non-blocking
// fs.readFile("input.txt", (err, dataFromTheFile) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(dataFromTheFile.toString());
//   }
// });

//blocking
let dataFromTheFile = fs.readFileSync("input.txt", { encoding: "utf-8" });
console.log(dataFromTheFile);
console.log("Program Ended !");
