import React from "react";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import Themes from "./Themes";
import ThemeProvider from "./ThemeProvider";

/**
 * Main Component
 * Desc: Provides theming capabilities to its child components and acts as an entry point for implementation of themes module.
 * Params:
 * - defaultTheme: (Optional)
 *     Desc: Sets default theme in case nothing is defined or user might have visited for the very first time.
 *     Values: "light", "dark"
 * - currentTheme: (Optional)
 *     Desc: This is loaded from user preferences for example if user saved setting set to dark mode by default. We 
 *           check and load that theme for him upon initialization.
 *           Note: This does not change theme after initialization. To change theme after initialization use ThemeSwitcher Component.
 *     Values: "light", "dark"
 * - children:
 *     Desc: The child component(s) to be themed. (passed between (inside) the opening and closing HTML tags)
*/
export default function Main({ defaultTheme, children, currentTheme }) {

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
