import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Blog({ sidebar, allPosts, mainFeaturedPost, sections }) {
  
  const classes = useStyles();
  if (typeof sidebar === 'undefined') {
    return null;
  }

  if (typeof allPosts === 'undefined') {
    return null;
  }

  if (typeof mainFeaturedPost === 'undefined') {
    return null;
  }

  if (typeof sections === 'undefined') {
    return null;
  }

  return (
    <React.Fragment>
      <CssBaseline />
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
          {console.error(mainFeaturedPost)}
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
