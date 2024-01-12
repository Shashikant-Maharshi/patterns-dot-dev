const person = {
  name: 'ravi mishra',
  age: 28,
  nationality: 'Indian'
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    if (!target[prop]) {
      throw new Error('Hmm.. this property doesn\'t seem to exist on the target object');
    } else {
      console.log(`The value of ${prop} is ${Reflect.get(target, prop)}`);
    }

    return Reflect.get(target, prop);
  },
  set: (target, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      throw new Error('Sorry, you can only pass numeric values for age.');
    } else if (prop === "name" && value.length < 2) {
      throw new Error('You need to provide a valid name.');
    } else {
      console.log(`Changed ${prop} from ${Reflect.get(target, prop)} to ${value}`);
      Reflect.set(target, prop, value)
    }
    
    return Reflect.get(target, prop);
  },
});

personProxy.name;
personProxy.age = 30;
personProxy.name = 'Jane Doe';
personProxy.age;
personProxy.name;

// --validation-checks--
// personProxy.age = "hello";
// personProxy.name = '';
// personProxy.status;
