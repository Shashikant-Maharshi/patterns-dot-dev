# Command Pattern

Command Pattern is one of the **Behavioral Design Pattern**. Command design pattern is used to implement loose coupling in a request-response model.
With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method.

## Pros
The command pattern allows us to decouple methods from the object that executes the operation. It gives you more control if you’re dealing with commands that have a certain lifespan, or commands that should be queued and executed at specific times.

## Cons
The use cases for the command pattern are quite limited, and often adds unnecessary boilerplate to an application.

## Use cases / Examples
1. File system utility that performs following commanded operations & it should support different OS flavours (i.e. every OS's implementations will vary)
  - open file
  - write to the file
  - close file
2. In restaurant table order utility where the waiter takes the order, which is a command from the customer. This order is then queued for the kitchen staff and executed at certain timeframe.
3. Implementation of a remote control device to turn on a television, switch channels, turn up the volume, and so on. Every one of these actions is encapsulated in the remote control device.