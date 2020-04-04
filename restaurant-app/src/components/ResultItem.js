import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: item.image_url }} />
      <Text style={styles.titleStyle}>{item.name}</Text>
      <Text style={styles.infoStyle}>
        {item.rating} Starts, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  titleStyle: {
    fontWeight: "bold",
  },
  infoStyle: {},
});

export default ResultItem;
