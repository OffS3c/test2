import React from "react";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Redirect,
  Route,
} from "react-router-dom";

import NoMatch from "./components/NoMatch";
import MyTheme from "./components/themes";
import Blog from "./components/blog/Blog";

export default function App() {
  return (
    <>
      <MyTheme
      // read the docs about Main Component in ./components/themes/index.jsx
      defaultTheme={"light"}
      currentTheme={"light"}
      >
        <Router>
          <Routes>
            <Route exact path="/404">
              <NoMatch />
            </Route>
            <Route exact path="/">
              <Redirect to="/featured-post" />
            </Route>
            <Route path="/:postSlug">
              <Blog />
            </Route>
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Routes>
        </Router>
      </MyTheme>
    </>
  );
}
