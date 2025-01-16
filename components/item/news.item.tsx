import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { News } from "@/models";

interface Props {
  item: News;
}

export default function ItemNews({ item }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: item.urlToImage,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text>{item.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 56,
    height: 56,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flexGrow: 1
  },
  detail: {
    flexDirection: 'column',
    flexGrow: 1
  }
});
