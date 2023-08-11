import EventEmitter from "events";
export function GetCount(maxIteration) {
  let e = new EventEmitter();

  let counter = 1;
  process.nextTick(() => {
    e.emit("start");
    let timer = setInterval(() => {
      if (counter == 8) {
        clearInterval(timer);
        e.emit("error", counter);
      }
      if (counter == maxIteration) {
        clearInterval(timer);
        e.emit("end", counter);
      }
      e.emit("count", counter++);
    }, 200);
  });
  return e;
}
