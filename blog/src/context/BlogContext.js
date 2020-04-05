import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "all_blog_post":
      return action.payload;
    case "delete_blog_post":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blog_post":
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    default:
      return state;
  }
};

const getAllPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "all_blog_post", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post("/blogposts", { title, content });

    // dispatch({ type: "add_blog_post", payload: { title, content } });
    if (!response) return;
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blog_post", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blog_post", payload: { id, title, content } });
    if (!callback) return;
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getAllPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
