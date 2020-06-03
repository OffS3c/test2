import React from "react";

const themeContext = React.createContext({
  selectedTheme: null,
  setSelectedTheme: () => {},
});

export default themeContext;
