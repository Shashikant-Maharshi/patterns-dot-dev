import * as observable from "./observable.js";

const logger = (data) => {
  console.log(`[logger] ${Date.now()}: ${data}`);
}

const toaster = (data) => {
  console.log(`[toaster] ${Date.now()}: ${data}`);
}

observable.subscribe(logger);
observable.subscribe(toaster);

// asynchronous & event-based data passing to all observers
const users = ['ram', 'om', 'shiv', 'raj'];

const handler = setInterval(() => {
  observable.notify(users.pop());
  
  if(!users.length) {
    observable.unsubscribe(logger);
    observable.unsubscribe(toaster);
    clearInterval(handler);
  }
}, 5000)

