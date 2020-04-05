import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import BlogDetailScreen from "./src/screens/BlogDetailScreen";
import AddBlogScreen from "./src/screens/AddBlogScreen";
import EditBlogScreen from "./src/screens/EditBlogScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    BlogDetail: BlogDetailScreen,
    AddBlog: AddBlogScreen,
    EditBlog: EditBlogScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
