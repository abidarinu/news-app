import ItemNews from "@/components/item/news.item";
import { ThemedView } from "@/components/ThemedView";
import { useFetchNewsListQuery } from "@/services/apis/news.api";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, TextInput } from "react-native";

export default function HomeScreen() {
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState<string>('');
  const { data, refetch, isFetching } = useFetchNewsListQuery({
    query,
  });

  const renderItem = React.useCallback(({ item }) => {
    return <ItemNews item={item} />;
  }, []);

  return (
    <ThemedView style={styles.container}>
      <TextInput onChangeText={setQuery} value={query} style={styles.query} onSubmitEditing={refetch}/>
      {isFetching ? (
        <ActivityIndicator size={'large'}/>
      ) : (

        <FlatList
        data={data?.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    padding: 20,
    flexDirection: 'column',
  },
  query: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },
  list: {
    flex: 1,
  },
  contentList: {
    gap: 16
  }
});
