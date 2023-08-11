import { GetCount } from "./publisher.js";

const evt = GetCount(10);
evt.on("count", currCount => {
  console.log("Received count : " + currCount);
});
evt.on("start", () => {
  console.log("Iteration started..");
});
evt.on("end", currCount => {
  console.log("Iteration Ended with count " + currCount);
});
evt.on("error", currCount => {
  console.log("Iteration Ended with error count " + currCount);
});
