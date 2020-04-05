import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BlogDetail", {
                  id: item.id,
                });
              }}
            >
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
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddBlog");
          }}
        >
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      );
    },
  };
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
