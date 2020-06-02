import React from "react";
import {
  useParams
} from "react-router-dom";

export default function BlogDetail({blogPostsArray}){
  const params = useParams();
  const detailId = params.id;
  const requiredBlogPost = blogPostsArray.filter(blog => blog.blogId === detailId);
  const blogPost = requiredBlogPost[0];
  const imgfluid = {
    height: 'auto',
    width: '100%',
    marginBottom: '1rem',
  }
  const textcenter = {
    textAlign: 'center',
  }
  return(
 <div style={textcenter} >
   
      <img style={imgfluid} src="https://www.sciencealert.com/images/2020-04/processed/CanWeGetRonaFromPets_1024.jpg" alt={"asdas"}></img>
      <h2>{blogPost.blogDetail}</h2>
      </div>
  );
}
