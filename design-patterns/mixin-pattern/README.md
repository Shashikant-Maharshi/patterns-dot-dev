# Mixin Pattern
A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance. We can’t use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance. Although we can add functionality with mixins without inheritance, mixins themselves can use inheritance!

## Category
None

## Pros
- Helps in extending object's prototype so that every object instance of that prototype can have access to  extended attributes.

## Cons
- The React team **discourages the use of mixins** as it easily adds unnecessary complexity to a component, making it hard to maintain and reuse. The React team **encouraged the use of higher order components** instead, which can now often be replaced by **Hooks**.
- **Modifying an object’s prototype is seen as bad practice, as it can lead to prototype pollution and a level of uncertainty regarding the origin of our functions.**

## Use cases / Examples
- Mixins were often used to add functionality to React components before the introduction of ES6 classes.
- An example of a mixin in the real world is visible on the `Window` interface in a browser environment. The `Window` object implements many of its properties from the `WindowOrWorkerGlobalScope` and `WindowEventHandlers` mixins, which allow us to have access to properties such as `setTimeout` and `setInterval`, `indexedDB`, and `isSecureContext`.

