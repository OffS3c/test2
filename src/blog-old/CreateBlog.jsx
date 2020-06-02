import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { withStyles } from "@material-ui/core/styles";
export default function CreateBlog(){
  let [blogPosts, setBlogs] = React.useState([
    {
      blogId:"1",
      blogAuthor:"Anthony",
      blogTitle: "lahore",
      blogDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      blogImage:
        "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    },
    { 
      blogId:"2",
      blogAuthor:"Bella",
      blogTitle: "lahore",
      blogDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      blogImage:
        "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    },
  ]);
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
  const margintop ={
    marginTop:'2rem',
  }
  return (
    <div>
      <form noValidate style={margintop}>
        <ValidationTextField
          label="Enter Blog Title"
          value={blogTitle}
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
          value={blogDesc}
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
          value={blogImg}
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
          Submit Blog
        </Button>
      </form>
    </div>
  );
}