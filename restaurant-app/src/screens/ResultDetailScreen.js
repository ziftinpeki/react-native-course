import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

import yelp from "../api/yelp";

const ResultDetail = ({ navigation }) => {
  const [result, setResult] = useState("");
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.imageStyle} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
  },
});

export default ResultDetail;
