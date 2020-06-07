import React from 'react';
import { 
  Switch as Routes,
  Route,
  useHistory,
  useLocation,
  useParams,
  Redirect,
} from "react-router-dom";

import Blog from "./Blog";

export default function Filters({
  AllPosts,
  Categories,
  Sections,
  Sidebar,
}) {
  
  const { categorySlug, postSlug } = useParams();
  const history = useHistory();
  const location = useLocation();
  
  // dummy data to populate while we wait for the API call to complete
  const [mainFeaturedPost, setMainFeaturedPost] = React.useState({
    id:`Loading...`,
    slug: `Loading...`,
    title: `Loading...`,
    date: `Loading...`,
    description: `Loading...`,
    image: `Loading...`,
    imageText: `Loading...`,
    linkText: `Loading...`,
    body: `Loading...`,
    category: `Loading...`,
  });
  
  React.useEffect(() => {
    if (Categories.includes(categorySlug) && AllPosts.map(post => post.slug).includes(postSlug)) {
      const post = AllPosts.filter(post => post.slug === postSlug)[0];
      setMainFeaturedPost(post);
    } else if (Categories.includes(categorySlug) && typeof postSlug === 'undefined') {
      let post = AllPosts.filter(post => post.category === categorySlug);
      if (post.length < 1) {
        setMainFeaturedPost({
          id:`0`,
          slug: `no-post-found-for-this-category`,
          title: `No post found for this category`,
          date: ``,
          description: ``,
          image: ``,
          imageText: `no-post`,
          linkText: ``,
          body: ``,
          category: ``,
        });
      } else {
        post = post[0];
        history.push(`/${categorySlug}/${post.slug}`);
      }
    } else {
      if (location.pathname === "/") {
        const post = AllPosts[0];
        history.push(`/${post.category}/${post.slug}`);
      } else {
        history.push(`/404`);
      }
    }
  }, [AllPosts, Categories, categorySlug, history, location, postSlug]);

  return (
    <>
      <Routes>
        {AllPosts.map((post)=>{
          return <Route exact key={post.id} path={`/${post.category}/${post.slug}`}></Route>;
        })}
        {Categories.map((category)=>{
          return <Route exact key={category} path={`/${category}`}></Route>;
        })}
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Routes>
      <Blog allPosts={AllPosts} mainFeaturedPost={mainFeaturedPost} sections={Sections} sidebar={Sidebar} />
    </>
  );
}
