import React from "react";

import MyTheme from "./components/themes";
import Home from "./components/Home";

export default function App() {
  return (
    <React.Fragment>
      <MyTheme 
        defaultTheme={"light"}
        currentTheme={"light"}
      >
        <Home />
      </MyTheme>
    </React.Fragment>
  );
};
