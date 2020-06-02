import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import ThemeContext from "./ThemeContext";

export default function ThemeConsumer({ children }) {
  const { selectedTheme /* , setSelectedTheme*/ } = React.useContext(ThemeContext);

  React.useEffect(()=>{
    console.log(`Consumer Current Theme: ${JSON.stringify(selectedTheme.palette.type)}`);
  }, [selectedTheme]);

  return <MuiThemeProvider theme={selectedTheme}>{children}</MuiThemeProvider>;
}
