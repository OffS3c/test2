import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Main from "../blog/Main";
import Themes from "../components/themes/Themes";
import ThemeContext from "../components/themes/ThemeContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function Home() {
  const { selectedTheme, setSelectedTheme } = React.useContext(ThemeContext);

  function switchNightMode() {
    setSelectedTheme(Themes.dark);
  }
  function switchLightMode() {
    setSelectedTheme(Themes.light);
  }
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          switchNightMode();
        }}
      >
        Night Mode
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          switchLightMode();
        }}
      >
        Light Mode
      </Button>
      <Main />
    </div>
  );
}
