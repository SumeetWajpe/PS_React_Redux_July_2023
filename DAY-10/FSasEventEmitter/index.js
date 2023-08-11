import fs from "fs";

const readableStream = fs.createReadStream("input.txt", { encoding: "utf-8" });
const writableStream = fs.createWriteStream("output.txt", {
  encoding: "utf-8",
});
let dataToBeWritten = "";
readableStream.on("data", chunk => {
  dataToBeWritten += chunk;
  console.log(`>>>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>`);
});

readableStream.on("end", () => {
  writableStream.write(dataToBeWritten);
  writableStream.end();
});
