import React from "react";
// import { useSelector } from "react-redux";

import { AllPosts, Categories, Sections, Sidebar } from "./constants";
import Filters from "./Filters";

export default function Blog() {
  return <Filters AllPosts={AllPosts} Categories={Categories} Sections={Sections} Sidebar={Sidebar} />
}
