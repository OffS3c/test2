import React from "react";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import Themes from "./Themes";
import ThemeProvider from "./ThemeProvider";

export default function ThemedGoods({ defaultTheme, children, currentTheme }) {
  
  let selectedTheme = null;
  let myDefaultTheme = Themes.light;
  let myCurrentTheme = Themes.light;

  if (typeof defaultTheme !== "undefined" && Object.keys(Themes).filter(theme => theme === defaultTheme).length > 0) {
    myDefaultTheme = Themes[defaultTheme];
  }

  if (typeof currentTheme !== "undefined" && Object.keys(Themes).filter(theme => theme === currentTheme).length > 0) {
    myCurrentTheme = Themes[currentTheme];
  }

  if (myCurrentTheme !== myDefaultTheme) {
    selectedTheme = myCurrentTheme;
  } else {
    selectedTheme = myDefaultTheme;
  }

  if (typeof currentTheme === 'undefined') {
    selectedTheme = myDefaultTheme;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider defaultSelectedTheme={selectedTheme}>
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};
