import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import { News } from "@/models";

interface Props {
  item: News;
}

const width = Dimensions.get("screen").width;

export default function ItemNews({ item }: Props) {
  console.log(item)
  return (
    <View style={styles.container}>
      {item.urlToImage && (
        <Image
          source={{
            uri: item.urlToImage,
          }}
          style={styles.image}
        />
      )}
      <View style={styles.detail}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text>Author: {item.author}</Text>
        <Text style={styles.content}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "column",
    gap: 16,
  },
  image: {
    width: width - 56,
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flexGrow: 1,
  },
  detail: {
    flexDirection: "column",
    flex: 1,
  },
  content: {
    fontSize: 16,
    marginTop: 12,
  },
});
