import React from "react";

const themeContext = React.createContext({
  theme: null,
  setTheme: () => {},
});

export default themeContext;
