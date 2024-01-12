import { ThemeProvider } from "./theme-provider.js";
import useThemeContext from "./theme-context.hook.js";

export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
};

// level-0 consumer
function Toggle() {
  const theme = useThemeContext();

  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  );
}

// level-0 non-consumer
function List() {
  return (
    <ul className="list">
      {new Array(10).fill(0).map((x, i) => (
        <ListItem key={i} />
      ))}
    </ul>
  );
}

// level-1 consumer
function ListItem() {
  const theme = useThemeContext();

  return (
    <li style={theme.theme}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </li>
  );
}
