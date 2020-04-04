import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.rowStyle}>
              <Text style={styles.titleStyle}>
                {item.id} - {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  deleteBlogPost(item.id);
                }}
              >
                <Feather name="trash" style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  iconStyle: {
    fontSize: 24,
  },
  titleStyle: {
    fontSize: 18,
  },
});

export default IndexScreen;
