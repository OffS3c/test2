import React from "react";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import ThemeContext from "./ThemeContext";

export default function ThemeConsumer({ children }) {
  const { selectedTheme } = React.useContext(ThemeContext);
  const theme = createMuiTheme(selectedTheme);

  React.useEffect(()=>{
    console.info(`You Selected New Theme: ${JSON.stringify(selectedTheme.palette.type)}`);
  }, [selectedTheme]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
