import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
export default function Home() {
  const homeBox_main = {
    position: "realative",
    backgroundImage:
      'url("https://img.wallpapersafari.com/desktop/1680/1050/86/69/PuLRvZ.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "80vh",
  };
  const homeBox_sub = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "24px",
    color: "white",
  };
  return (
    <div style={homeBox_main}>
      <div style={homeBox_sub}>
        <h1>Welcome to My Blog</h1>
      </div>
    </div>
  );
}
