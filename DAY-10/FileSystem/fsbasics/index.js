import fs from "fs";

// non-blocking
fs.readFile("input.txt", (err, dataFromTheFile) => {
  if (err) {
    console.log(err);
  } else {
    console.log(dataFromTheFile.toString());
  }
});

console.log("Program Ended !");
