let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('You can only create one instance!');
    }

    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    console.log('increamenting');
    counter++;
  }
  
  decrement() {
    console.log('decrementing');
    counter--;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
