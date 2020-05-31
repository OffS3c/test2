import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

export default function NewThemeProvider({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
