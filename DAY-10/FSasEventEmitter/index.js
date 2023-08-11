import fs from "fs";

const readableStream = fs.createReadStream("input.txt", { encoding: "utf-8" });
readableStream.on("data", chunk => {
  console.log(`>>>>>>>>>>>>>>>>> CHUNK >>>>>>>>>>>`);
});
