import React from "react";
import { useSelector } from "react-redux";

import { Categories, Sections, Sidebar } from "./constants";
import Filters from "./Filters";

export default function Blog() {
  const posts = useSelector(state => state.posts);
  
  return <Filters AllPosts={posts} Categories={Categories} Sections={Sections} Sidebar={Sidebar} />
}
