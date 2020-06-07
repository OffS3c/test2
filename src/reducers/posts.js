import { AllPosts } from "../components/blog/constants";

const posts = (state = [], action) => {
  switch (action.type) {
    case 'RESET_ALL_POSTS':
      return [
        ...AllPosts,
      ];
    case 'ADD_POST':
      return [
        ...state,
        {
          id: action.id,
          slug: action.slug,
          title: action.title,
          date: action.date,
          description: action.description,
          image: action.image,
          imageText: action.imageText,
          linkText: action.linkText,
          category: action.category,
          body: action.body,
        }
      ];
    case 'EDIT_POST':
      return state.map(post =>
        (post.id === action.id)
          // just changing title for demonstration
          ? {...post, title: `${post.title} (edited)` }
          : post
      );
    default:
      return state;
  }
};

export default posts;
