import React from "react";

import Main from "../blog/Main";
import ThemeToggle from "../components/themes/ThemeSwitcher";

export default function Home() {
  return (
    <div>
      <div style={{ width: 50, height: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <ThemeToggle color={"primary"} />
      </div>
      <Main />
    </div>    
  );
};
