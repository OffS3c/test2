import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Grow from "@material-ui/core/Grow";
import BlogDetail from "./BlogDetail"
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useParams
} from "react-router-dom";

export default function BlogLists({ blogPostsArray }){
  const match = useRouteMatch();
  const [blogPosts, setBlogs] = React.useState(blogPostsArray);
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 140,
    },
    marginTop:{
      marginTop: '2rem',
          }
  });  
  const classes = useStyles();
  return(< Container>
   <Grid container spacing={3} className={classes.marginTop}>
     <Router>
              {blogPosts.map((e, i) => {
                return (
                   <Grow in key={i}>                
                    <Grid item xs={3} >
                    <Link to={`/blog-detail/${e.blogId}`}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={e.blogImage}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {e.blogTitle}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {e.blogDetail}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                      </Link>
                    </Grid> 
                                   
                  </Grow>
                );
              })}
            
              </Router>
            </Grid>        
  </Container>);
}