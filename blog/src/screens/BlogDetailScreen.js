import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const BlogDetailScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state } = useContext(Context);

  const blog = state.find((item) => item.id === id);

  return (
    <View>
      <Text>
        {blog.id} - {blog.title}
      </Text>
    </View>
  );
};

BlogDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditBlog", { id: navigation.getParam("id") });
          }}
        >
          <FontAwesome name="pencil-square-o" size={30} />
        </TouchableOpacity>
      );
    },
  };
};

export default BlogDetailScreen;
