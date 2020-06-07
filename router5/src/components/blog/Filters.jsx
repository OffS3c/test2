import React from 'react';
import { 
  Switch as Routes,
  Route,
  useHistory,
  useLocation,
  useParams,
  Redirect,
} from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import Blog from "./Blog";
import post1 from './blog-post.1.md.js';
import post2 from './blog-post.2.md.js';
import post3 from './blog-post.3.md.js';

const sections = [
  { title: 'Technology', url: '/technology' },
  { title: 'Design', url: '/design' },
  { title: 'Culture', url: '/culture' },
  { title: 'Business', url: '/business' },
];

const AllPosts = [
  {
    id: '1',
    slug: 'post-1',
    title: 'Post 1 Title of a longer blog post',
    date: 'Nov 12',
    description:
      "Informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'technology',
    body: post1,
  },
  {
    id: '2',
    slug: 'post-2',
    title: 'Post 2 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'technology',
    body: post2,
  },
  {
    id: '3',
    slug: 'post-3',
    title: 'Post 3 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'technology',
    body: post3,
  },
  {
    id: '4',
    slug: 'post-4',
    title: 'Post 1 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'design',
    body: post3,
  },
  {
    id: '5',
    slug: 'post-5',
    title: 'Post 1 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'culture',
    body: post2,
  },
  {
    id: '6',
    slug: 'post-6',
    title: 'Post 1 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    category: 'culture',
    body: post3,
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const categories = [...new Set(AllPosts.map(pp => pp.category))];

export default function Filters() {
  
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
    if (categories.includes(categorySlug) && AllPosts.map(post => post.slug).includes(postSlug)) {
      const post = AllPosts.filter(post => post.slug === postSlug)[0];
      setMainFeaturedPost(post);
    } else if (categories.includes(categorySlug) && typeof postSlug === 'undefined') {
      const post = AllPosts.filter(post => post.category === categorySlug)[0];
      history.push(`/${categorySlug}/${post.slug}`);
    } else {
      if (location.pathname === "/") {
        const post = AllPosts[0];
        history.push(`/${post.category}/${post.slug}`);
      } else {
        history.push(`/404`);
      }
    }
  }, [categorySlug, history, postSlug]);

  return (
    <>
      <Routes>
        {AllPosts.map((post)=>{
          return <Route exact key={post.id} path={`/${post.category}/${post.slug}`}></Route>;
        })}
        {categories.map((category)=>{
          return <Route exact key={category} path={`/${category}`}></Route>;
        })}
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Routes>
      <Blog allPosts={AllPosts} mainFeaturedPost={mainFeaturedPost} sections={sections} sidebar={sidebar} />
    </>
  );
}
