import React from "react";
import Themes from "./Themes";

const themeContext = React.createContext({
  theme: Themes.light,
  setTheme: () => {},
});

export default themeContext;
