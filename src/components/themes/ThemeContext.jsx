import React from "react";
import { Themes } from "./ThemeProvider";

const themeContext = React.createContext({theme: Themes.light});

export default themeContext;
