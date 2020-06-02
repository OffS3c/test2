import React from "react";

import Themes from "./Themes";
import ThemeContext from "./ThemeContext";
import ThemeConsumer from "./ThemeConsumer";

export default function ThemeProvider({ children }) {

  const [selectedTheme, setSelectedTheme] = React.useState(Themes.light);
  const themeAndSetter = {
    selectedTheme,
    setSelectedTheme,
  };

  return (
    <ThemeContext.Provider value={themeAndSetter}>
        <ThemeConsumer>
          {children}
        </ThemeConsumer>
    </ThemeContext.Provider>
  );
}
