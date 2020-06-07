import { combineReducers } from 'redux';

import categories from "./categories";
import posts from "./posts";
import sections from "./sections";
import sidebar from "./sidebar";

export default combineReducers({
  categories,
  posts,
  sections,
  sidebar,
});
