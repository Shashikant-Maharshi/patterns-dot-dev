# Mediator/Middleware Pattern Pattern
The mediator pattern makes it possible for components to interact with each other through a central point: the mediator. Instead of directly talking to each other, the mediator receives the requests, and sends them forward! In JavaScript, the mediator is often nothing more than an object literal or a function.

## Category
Behavioral Design Pattern

## Pros
- Single Responsibility Principle. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.
- Open/Closed Principle. You can introduce new mediators without having to change the actual components.
- You can reduce coupling between various components of a program.
- You can reuse individual components more easily.

## Cons
- Over time a mediator can evolve into a God Object.

## Use cases / Examples
- Air traffic system: You can compare this pattern to the relationship between an air traffic controller and a pilot. Instead of having the pilots talk to each other directly, which would probably end up being quite chaotic, the pilots talk the air traffic controller. The air traffic controller makes sure that all planes receive the information they need in order to fly safely, without hitting the other airplanes.
- Chat room system: A good use case for the mediator pattern is a chatroom! The users within the chatroom won’t talk to each other directly. Instead, the chatroom serves as the mediator between the users.
