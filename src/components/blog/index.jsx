import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import { AllPosts, Categories, Sections, Sidebar } from "./constants";
import { Categories, Sections, Sidebar } from "./constants";
import { resetAllPosts } from "../../actions";
import Filters from "./Filters";

export default function Blog() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  
  const resetPosts = React.useCallback(
    () => {
      console.log("ALL POSTS RESET!");
      dispatch(resetAllPosts());
      console.log("Study REDUX-THUNK!");
    },
    [dispatch],
  );

  return <Filters AllPosts={posts} Categories={Categories} Sections={Sections} Sidebar={Sidebar} />
}
