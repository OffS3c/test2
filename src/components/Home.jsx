import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { getTheme } from "./utils";
import Main from "../blog/Main";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function Home() {
  function switchNightMode(mode) {
    getTheme(mode);
  }
  function switchLightMode(mode) {
    getTheme(mode);
  }
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          switchNightMode(1);
        }}
      >
        Night Mode
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          switchLightMode(0);
        }}
      >
        Light Mode
      </Button>
      <Main />
    </div>
  );
}
