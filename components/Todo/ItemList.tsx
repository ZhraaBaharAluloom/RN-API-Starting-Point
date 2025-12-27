import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ItemTypes } from "@/data/items";
import AddItem from "./AddItem";
import ItemCard from "./ItemCard";

const ItemsList = () => {
  const [itemData, setItemData] = useState<ItemTypes[]>([]);

  useEffect(() => {
    // Call you async function here
  }, []);

  let itemList = itemData.map((item) => <ItemCard item={item} key={item.id} />);

  return (
    <View style={styles.itemsContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>items</Text>
      </View>
      <AddItem placeholder="Add New Item :)" />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={styles.listContainer}
      >
        {itemList}
      </ScrollView>
    </View>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "Times New Roman",
    textAlign: "center",
  },

  itemsContainer: {
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
  },
});
