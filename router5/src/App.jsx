import React from "react";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
  useLocation,
} from "react-router-dom";

import MyTheme from "./components/themes";
import Blog from "./components/blog/Blog";

export default function App() {
  return (
    <>
      <Router>
        <MyTheme
          // read the docs about Main Component in ./components/themes/index.jsx
          defaultTheme={"light"}
          currentTheme={"light"}
        >
          <Routes>
            <Route exact path="/">
              <Blog />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Routes>
        </MyTheme>
      </Router>
    </>
  );
}

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
