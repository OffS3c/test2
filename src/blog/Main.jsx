import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./BlogLists";
import BlogLists from "./BlogLists";
import CreateBlogs from "./CreateBlog";
import Home from "./Home";
import EditBlogs from "./EditBlog";
import BlogDetail from "./BlogDetail";
export default function Main() {
  const navbar = {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    listStyleType: "none",
    display: "flex",
    padding: "20px 30px",
    margin: 0,
  };
  const nav = {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    padding: "20px 30px",
    margin: 0,
    marginLeft: "auto",
  };
  const navlinks = {
    padding: "20px 30px",
    textDecoration: "none",
    color: "white",
  };
  const [blogPosts, setBlogs] = React.useState([
    {
      blogId: "1",
      blogAuthor: "Anthony",
      blogTitle: "lahore",
      blogDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      blogImage:
        "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    },
    {
      blogId: "2",
      blogAuthor: "Bella",
      blogTitle: "lahore",
      blogDetail:
        "saasdasdasdsadasdad  asdadsddnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      blogImage:
        "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    },
  ]);
  return (
    <Container>
      <Router>
        <nav style={navbar}>
          <img
            src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo-624x357.jpg"
            height="76px"
          ></img>
          <ul style={nav}>
            <li>
              <Link style={navlinks} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={navlinks} to="/BlogLists">
                Blogs List
              </Link>
            </li>
            <li>
              <Link style={navlinks} to="/CreateBlog">
                Create Blog
              </Link>
            </li>
            <li>
              <Link style={navlinks} to="/EditBlogs">
                Edit Blog
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/CreateBlog">
            <CreateBlogs />
          </Route>
          <Route path="/BlogLists">
            <Container>
              <BlogLists blogPostsArray={blogPosts} />
            </Container>
          </Route>
          <Route path="/EditBlogs">
            <EditBlogs blogPostsArray={blogPosts} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
          <Route>
            <BlogDetail />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
function NoMatch() {
  const location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}