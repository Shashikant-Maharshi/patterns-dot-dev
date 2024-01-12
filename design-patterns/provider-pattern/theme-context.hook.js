import { ThemeContext } from "./theme-provider.js";

const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }

  return theme;
}

export default useThemeContext;
