import React from 'react';
import { 
  Switch as Routes,
  Route,
  useHistory,
  useParams,
  Redirect,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md.js';
import post2 from './blog-post.2.md.js';
import post3 from './blog-post.3.md.js';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
];

const allPosts = [
  {
    slug: 'post-1',
    title: 'Post 1 Title of a longer blog post',
    date: 'Nov 12',
    description:
      "Informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    body: post1,
  },
  {
    slug: 'post-2',
    title: 'Post 2 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
    body: post2,
  },
  {
    slug: 'post-3',
    title: 'Post 3 Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'continue reading...',
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

export default function Blog() {
  
  const classes = useStyles();
  const { postSlug } = useParams();
  const history = useHistory();

  // dummy data to populate while we wait for the API call to complete
  const [mainFeaturedPost, setMainFeaturedPost] = React.useState({
    slug: `Loading...`,
    title: `Loading...`,
    date: `Loading...`,
    description:
      `Loading...`,
    image: `Loading...`,
    imageText: `Loading...`,
    linkText: `Loading...`,
    body: `Loading...`,
  });

  React.useEffect(() => {
    if (postSlug === 'featured-post') {
      const fp = allPosts[0];
      setMainFeaturedPost(fp);
      history.push(`/${fp.slug}`);
    } else {
      setMainFeaturedPost(allPosts.filter(post => post.slug === postSlug)[0]);
    }
  }, [postSlug, history]);
  
  if (!allPosts.map(post => post.slug).includes(postSlug) && postSlug !== 'featured-post') {
    history.push(`/404`);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Routes>
        {allPosts.map((post)=>{
          return <Route exact path={`/${post.slug}`}></Route>
        })}
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Routes>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {allPosts.filter(el => el !== mainFeaturedPost).map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" post={mainFeaturedPost} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
