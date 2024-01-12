class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks!`);
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} flies!`);
  }
}

const pet1 = new Dog('Max');
const pet2 = new SuperDog('Min');

pet1.bark();
pet2.bark();
pet2.fly();
