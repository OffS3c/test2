import React from "react";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";

import ThemeProvider from "./components/themes/ThemeProvider";
import Home from "./components/Home";

export default function App() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </React.Fragment>
  );
}
