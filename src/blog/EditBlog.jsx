import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Grow from "@material-ui/core/Grow";
import { withStyles } from "@material-ui/core/styles";
import BlogLists from "./BlogLists"
export default function EditBlog( {blogPostsArray}) {
  // var [editblog,setedit] = React.useState([{
  //   EditTitle : "",
  //   EditImg : "",
  //   EditDetail : "",
  // }]) 
 var EditTitle = "dsadsad";
  var  EditImg = "dasdsad";
  var  EditDetail = "dasdasd";
  const [blogPosts, setBlogs] = React.useState(blogPostsArray);

  const ValidationTextField = withStyles({
    root: {
      "& input:valid + fieldset": {
        borderColor: "green",
        borderWidth: 2,
      },
      "& input:invalid + fieldset": {
        borderColor: "red",
        borderWidth: 2,
      },
      "& input:valid:focus + fieldset": {
        borderLeftWidth: 6,
        padding: "4px !important", // override inline-style
      },
      "& .margin": {
        marginBottom: "4rem",
      },
    },
  })(TextField);
  const marginbtm = {
    marginBottom: "4rem",
  };
  const [blogTitle, setblogTitle] = React.useState("");
  const [blogDesc, setblogDesc] = React.useState("");
  const [blogImg, setblogImg] = React.useState("");
  function handleNewblogTitle(title) {
    setblogTitle(title);
  }
  function handleNewblogDetail(detail) {
    setblogDesc(detail);
  }
  function handleNewblogImg(img) {
    setblogImg(img);
  }
  function handleEditblogDetail(title, img, detail) {
    EditTitle = title;
    EditImg = img;
    EditDetail = detail;
    console.log(EditTitle, EditImg, EditDetail);
  }
  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 140,
    },
    marginTop: {
      marginTop: "2rem",
    },
  });
  const classes = useStyles();
  return (
    <div>
        <BlogLists blogPostsArray={blogPosts} />
      <form noValidate className={classes.marginTop}>
        <ValidationTextField
          label="Enter Blog Title"
          Value  = {blogTitle}
          defaultValue={EditTitle}
          onChange={(evt) => {
            handleNewblogTitle(evt.target.value);
          }}
          required
          fullWidth
          variant="outlined"
          id="validation-outlined-input"
          style={marginbtm}
        />
        <ValidationTextField
          label="Enter Blog Detail"
          defaultValue={EditDetail}
          Value = {blogDesc}
          onChange={(evt) => {
            handleNewblogDetail(evt.target.value);
          }}
          required
          fullWidth
          variant="outlined"
          id="validation-outlined-input"
          style={marginbtm}
        />
        <ValidationTextField
          label="Image Link"
          required
          fullWidth
          Value  = {blogImg}
          defaultValue={EditImg}
          onChange={(evt) => {
            handleNewblogImg(evt.target.value);
          }}
          variant="outlined"
          id="validation-outlined-input"
          style={marginbtm}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const tmp = [];
            blogPosts.forEach((blog) => {
              tmp.push(blog);
            });
            var obj = {
              blogImage: blogImg,
              blogTitle: blogTitle,
              blogDetail: blogDesc,
            };
            tmp.push(obj);
            setBlogs(tmp);
            console.log(tmp);
          }}
        >
          Save
        </Button>
      </form>
    </div>
  );
}
