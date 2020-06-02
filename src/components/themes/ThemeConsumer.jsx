import React from "react";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ThemeContext from "./ThemeContext";

export default function ThemeConsumer({ children }) {
  const { selectedTheme } = React.useContext(ThemeContext);
  const theme = createMuiTheme(selectedTheme);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
