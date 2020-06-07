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
  { title: 'Technology', url: '/technology' },
  { title: 'Design', url: '/design' },
  { title: 'Culture', url: '/culture' },
  { title: 'Business', url: '/bussiness' },
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
    body: post3,
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

const categories = [];
AllPosts.forEach((el) => {
  if (!categories.includes(el.category)) {
    categories.push(el.category);
  }
});

export default function Blog() {
  
  const classes = useStyles();
  const { categorySlug, postSlug } = useParams();
  const history = useHistory();

  const [allPosts, setAllPosts] = React.useState(AllPosts);
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
    if (categorySlug === 'featured-post') {
      const fp = allPosts[0];
      setMainFeaturedPost(fp);
      setAllPosts(AllPosts.filter(el => el.category === fp.category));
      history.push(`/${fp.category}/${fp.slug}`);
      history.replace(`/${fp.category}/${fp.slug}`);
      alert("first if")
    } else if(categories.includes(categorySlug)) {
      setAllPosts(AllPosts.filter(el => el.category === categorySlug));
      const post = allPosts[0];
      setMainFeaturedPost(post);
      history.push(`/${categorySlug}/${post.slug}`);
      history.replace(`/${categorySlug}/${post.slug}`);
      alert("2nd if")
    } else {
      setAllPosts(AllPosts.filter(el => el.category === categorySlug));
      setMainFeaturedPost(allPosts.filter(post => post.slug === postSlug)[0]);
    }
    // if(categories.includes(categorySlug)){
      
    //   setAllPosts(allPosts.filter(el => el.slug === postSlug));
    //   const post = allPosts[0];
    //   setMainFeaturedPost(post);
    //   history.push(`/${categorySlug}/${post.slug}`);
    //   history.replace(`/${categorySlug}/${post.slug}`);
    // }
  }, [categorySlug, history, postSlug]);
  
  if (!allPosts.map(post => post.slug).includes(postSlug) && categorySlug !== 'featured-post' && !categories.includes(categorySlug)) {
    history.push(`/404`);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Routes>
        {allPosts.map((post)=>{
          return <Route exact key={post.id} path={`/${post.category}/${post.slug}`}></Route>;
        })}
        {categories.map((category)=>{
          return <Route exact key={category} path={`/${category}`}></Route>;
        })}
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Routes>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections}  />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {allPosts.filter(el => el !== mainFeaturedPost && el.category === mainFeaturedPost.category).map((post) => (
              <FeaturedPost key={post.id} post={post} />
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
