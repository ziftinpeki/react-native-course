import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const AddBlogScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("Index"));
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
  inputStyle: {
    fontSize: 18,
    marginBottom: 15,
    padding: 5,
  },
  labelStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AddBlogScreen;
