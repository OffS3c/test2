import React from "react";

import Blog from "./blog/Blog";
// import OldBlog from "./blog-old/Main";

export default function Home() {
  return (
    <React.Fragment>
      <Blog />
      {/* <OldBlog /> */}
    </React.Fragment>
  );
};
