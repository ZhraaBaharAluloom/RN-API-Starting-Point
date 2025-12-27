import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ItemTypes } from "@/data/items";
import AddItem from "./AddItem";
import ItemCard from "./ItemCard";

const ItemList = () => {
  const [itemData, setItemData] = useState<ItemTypes[]>([]);

  const getData = async () => {
    // 1. Install axios (go to npm axios)
    // 2. use axios to get the data and install it in a variable
    // 3. store the result in the itemData using setItemData
  };

  useEffect(() => {
    // 4. Call the async function here
  }, []);

  // 5. Replace the items inside the <ItemCard /> to render the correct properties
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

export default ItemList;

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
