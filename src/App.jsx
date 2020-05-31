import React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getTheme } from "./components/utils"
import ThemeProvider from "./components/themes/ThemeProvider";

export default function App() {
  const theme = getTheme();

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        asdhjkasd
      </ThemeProvider>
    </React.Fragment>
  );
}
