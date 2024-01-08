# Prototype Pattern
The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that’s native to JavaScript, and can be accessed by objects through the prototype chain.

## Category
Creational Design Pattern

## Pros
- The prototype pattern allows us to easily let objects access and inherit properties from other objects. 
- The prototype chain allows us to access properties that aren’t directly defined on the object itself, hence we can avoid duplication of methods and properties, thus reducing the amount of memory used.

## Cons
None

## Use cases / Examples
- `window` browser object and amy other like it. In short everytime we deal with this pattern whenever we're using objects in our application.