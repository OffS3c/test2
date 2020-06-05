import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MyTheme from "./components/themes";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Router>
        <MyTheme
          // read the docs about Main Component in ./components/themes/index.jsx
          defaultTheme={"light"}
          currentTheme={"light"}
        >
          <Home />
        </MyTheme>
      </Router>
    </>
  );
};
