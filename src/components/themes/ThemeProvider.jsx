import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import LightTheme from "./LightMode";
import DarkTheme from "./DarkMode";
import ThemeContext from "./ThemeContext";

const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

// const setTheme = (name) => {
//   if ((Object.keys(themes).filter(themeName => themeName === name)).length > 0) {
//     setSelectedTheme(themes[name]);
//     alert("selected");
//   } else {
//     alert("not selected");
//   }
// }

export default function ThemeProvider({ children }) {

  const [selectedTheme, setSelectedTheme] = React.useState(themes.light);

  return (
    <ThemeContext.Provider>
      <ThemeContext.Consumer >
        <MuiThemeProvider theme={value.theme}>
          {children}
        </MuiThemeProvider>
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export {
  Themes,
};
