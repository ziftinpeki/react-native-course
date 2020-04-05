import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Title: </Text>
      <TextInput
        value={title}
        placeholder="Please type title"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(title) => {
          setTitle(title);
        }}
      />
      <Text style={styles.labelStyle}>Content: </Text>
      <TextInput
        value={content}
        placeholder="Please type content"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(content) => {
          setContent(content);
        }}
      />
      <Button
        title="Save Blog Post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
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

export default BlogPostForm;
