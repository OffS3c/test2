import React from "react";
import IconButton from '@material-ui/core/IconButton';
import LightModeActiveIcon from '@material-ui/icons/Brightness4';
import DarkModeActiveIcon from '@material-ui/icons/Brightness7';

import Themes from "./Themes";
import ThemeContext from "./ThemeContext";

export default function ThemeSwitcher(props) {
  const { selectedTheme, setSelectedTheme } = React.useContext(ThemeContext);
  const componentPropsList = ["cb"];
  const [componentProps, btnProps] = getProps();
  const callback = componentProps.cb ? componentProps.cb : () => {};
  
  function getProps() {
    const keys = Object.keys(props);
    const values = Object.values(props);
    const myComponentProps = {};
    const myBtnProps = {};

    keys.forEach((e, i) => {
      if (componentPropsList.includes(e)) {
        myComponentProps[e] = values[i];
      }
    });
    keys.forEach((e, i) => {
      if (!componentPropsList.includes(e)) {
        myBtnProps[e] = values[i];
      }
    });

    return [myComponentProps, myBtnProps];
  }

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
    callback();
  }

  return (
    <IconButton {...btnProps} onClick={toggleTheme}>
      { (selectedTheme.palette.type === 'light') ? <LightModeActiveIcon /> : <DarkModeActiveIcon /> }
    </IconButton>
  );
};
