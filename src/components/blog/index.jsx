import React from "react";
import { useSelector } from "react-redux";

import Filters from "./Filters";

export default function Blog() {
  const posts = useSelector(state => state.posts);
  const categories = useSelector(state => state.categories);
  const sections = useSelector(state => state.sections);
  const sidebar = useSelector(state => state.sidebar);
  
  return <Filters AllPosts={posts} Categories={categories} Sections={sections} Sidebar={sidebar} />
}
