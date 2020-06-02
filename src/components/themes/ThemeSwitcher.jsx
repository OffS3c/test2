import React from "react";
import IconButton from '@material-ui/core/IconButton';
import LightModeActiveIcon from '@material-ui/icons/Brightness4';
import DarkModeActiveIcon from '@material-ui/icons/Brightness7';

import Themes from "./Themes";
import ThemeContext from "./ThemeContext";

export default function ThemeSwitcher(props) {
  const { selectedTheme, setSelectedTheme } = React.useContext(ThemeContext);

  function switchToDarkMode() {
    setSelectedTheme(Themes.dark);
  }

  function switchToLightMode() {
    setSelectedTheme(Themes.light);
  }

  function toggleTheme() {
    if (selectedTheme.palette.type === 'light') {
      switchToDarkMode();
    } else {
      switchToLightMode();
    }
  }

  return (
    <IconButton {...props} onClick={toggleTheme} title="Toggle light/dark theme" aria-label="Toggle light/dark theme" component="span">
      { (selectedTheme.palette.type === 'light') ? <LightModeActiveIcon /> : <DarkModeActiveIcon /> }
    </IconButton>
  );
};
