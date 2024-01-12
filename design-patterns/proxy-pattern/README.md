# Proxy Pattern
Lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object. Proxies are a powerful way to add control over the behavior of an object.

## Category
Structural Design Pattern

## Pros
- Provides more control over accessing & modifying the target object.
  - In JS, We can use `new Proxy(targetObject, handlerObject)` syntax to create a proxy for a target object.
  - Proxy's handler objects in house method also provides `Reflect` built-in object to `get` or `set` target object properties e.g. `Reflect.get(targetObject, prop)`, `Reflect.set(targetObject, prop, value)`.

## Cons
- Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It’s best to not use proxies for performance-critical code.


## Use cases / Examples
- A proxy can have various use-cases: it can help with validation, formatting, notifications, or debugging.

