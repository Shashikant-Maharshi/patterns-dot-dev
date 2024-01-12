# Static Import
By default ES2015 module import syntax imports modules statically & adds them to main bundle.

## Category
None

## Pros
- Helps in encapsulating details within a module that could be reused by multiple consumers through ES2015 import syntax.
- Import comes into two forms static & dynamic.
  - Regular mode is static import where we import those modules that were must to render app functionality on initial load. 
  - Dynamic import we use on-demand that is on a particular events where they need to be loaded. Helps in speeding up the applications initial load time. 

## Cons
- Thoughtful consideration is needed to decide which modules needs static imports & which one needs to be imported dynamically. Otherwise they could lead to performance bottlenecks based on users device & internet bandwidth.

## Use cases / Examples
- React component-A gets imported in component-B & component-C is one basic use case.

