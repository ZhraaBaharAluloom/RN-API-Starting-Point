import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ItemTypes } from "@/data/items";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Checkbox } from "expo-checkbox";

interface ItemCardProps {
  item: ItemTypes;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View key={item.id} style={styles.itemCard}>
      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text
        style={[styles.itemText, isChecked && styles.completed]}
        numberOfLines={1}
      >
        {item.todo}
      </Text>
      <FontAwesome name="remove" size={24} color="red" />
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    margin: 5,
    width: 290,

    backgroundColor: "#fff",
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    flex: 1,
    marginHorizontal: 8,
  },
  completed: {
    textDecorationLine: "line-through",
  },
});
