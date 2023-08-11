import { GetCount } from "./publisher.js";

const evt = GetCount(10);
evt.on("count", currCount => {
  console.log("Received count : " + currCount);
});
