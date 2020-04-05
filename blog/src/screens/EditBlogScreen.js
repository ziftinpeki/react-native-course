import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import BlogPostForm from "../components/BlogPostForm";

import { Context } from "../context/BlogContext";

const EditBlogScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const blog = state.find((item) => item.id === navigation.getParam("id"));

  return (
    <View style={styles.container}>
      <BlogPostForm
        initialValues={{ title: blog.title, content: blog.content }}
        onSubmit={(title, content) => {
          editBlogPost(blog.id, title, content, () => {
            navigation.pop();
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default EditBlogScreen;
