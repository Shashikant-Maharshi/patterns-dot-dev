# Provider Pattern
With the Provider Pattern, we can make data available to multiple components. This can be used to share global data state with multiple components that need it no matter where they reside in the hierarchy.

## Category
None

## Pros
- The Provider pattern/Context API makes it possible to pass data to many components, without having to manually pass it through each component layer.
- It reduces the risk of accidentally introducing bugs when refactoring code. Previously, if we later on wanted to rename a prop, we had to rename this prop throughout the entire application where this value was used.
- We no longer have to deal with prop-drilling, which could be seen as an anti-pattern. Previously, it could be difficult to understand the dataflow of the application, as it wasn’t always clear where certain prop values originated. With the Provider pattern, we no longer have to unnecessarily pass props to component that don’t care about this data.
- Keeping some sort of global state is made easy with the Provider pattern, as we can give components access to this global state.

## Cons
- In some cases, overusing the Provider pattern can result in performance issues. All components that consume the context re-render on each state change. In larger applications, passing a frequently updated value to many components can affect the performance negatively.
  - To make sure that components aren’t consuming providers that contain unnecessary values which may update, you can create several providers for each separate usecase.


## Use cases / Examples
- In react `Context` API is an example of provider pattern.
  - `React.createContext`: Provides you new context instance. Here, lets say its a `ThemeContext`.
  - `ThemeContext`: This instance exposes HOC `Provider` that holds the `value` accessible to all children component hierarchy wrapped within `ThemeContext.Provider` HOC.
  - `useContext`: The consumers can make use of `useContext` hook to get `value` supplied by a given context in this case it'll return `value` of `ThemeContext`.