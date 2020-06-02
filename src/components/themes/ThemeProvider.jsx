import React from "react";

import Themes from "./Themes";
import ThemeContext from "./ThemeContext";
import ThemeConsumer from "./ThemeConsumer";

export default function ThemeProvider({ children, defaultSelectedTheme }) {

  let mySelectedTheme = null;

  if (typeof defaultSelectedTheme !== 'undefined') {
    mySelectedTheme = defaultSelectedTheme;
  } else {
    mySelectedTheme = Themes.light;
  }

  const [selectedTheme, setSelectedTheme] = React.useState(mySelectedTheme);
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
};
