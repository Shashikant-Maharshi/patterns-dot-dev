import counter from "./counter.js";

setInterval(() => {
  counter.increment();
}, 1_000);

setInterval(() => {
  console.log(counter.getCount());
}, 5_000);

setInterval(() => {
  counter.decrement();
}, 10_000);