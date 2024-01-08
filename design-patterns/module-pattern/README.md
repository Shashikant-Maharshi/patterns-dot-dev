# Module Pattern
Module pattern helps in spliting out reusable utility logics into their own files which in turn can be imported by other files to use those utilities.

## Category
None

## Pros
- Helps in encapsulating part of our code into its own module file.
- Helps in preventing accidental name collision & global scope pollution which makes working with multiple dependencies & namespaces less risky.

## Cons
In order to be able to use ES2015 modules in all JavaScript runtimes, a transpiler such as Babel is needed.

## Use cases / Examples
- Creating module hierarchy where every node is the module file encomposing specific reusable logic. For example we import "react" package which is a module.
- While using JS ES2015 module keep following functional aspects in mind,
  * Use `export` for named export.
  * Use `export default` for default export.
  * Named exports can be imported like `import { namedExportA } from 'module'`.
  * Default exports can be imported like `import defaultExport from 'module'`. Where you can choose any name of your choice at the place of `defaultExport`.
  * You can rename the name export like `import { namedExportA as customizedName } from 'module'`.
  * You can import all exported members like `import * as myModule from 'module'`. You can access values exported by `myModule` like `myModule.default`, `myModule.namedExportA`.
  * You can use dynamic import that means import things conditionally when needed. It helps in speeding up page load time since we're not importing unwanted modules before-hand instead loading them when needed.
  - Dynamic imports also supports to import modules using string template literal expression like *const res = await import(`../assets/dog${num}.png`);*