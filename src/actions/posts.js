
function resetAllPosts() { 
  return {
    type: 'RESET_ALL_POSTS',
  };
}

function deletePost(id) { 
  return {
    type: 'DELETE_POST',
    id,
  };
}

export {
  deletePost,
  resetAllPosts,
};
