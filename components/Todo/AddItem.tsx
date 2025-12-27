import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CustomizedButton from "../Button/CustomizedButton";

interface AddItemProps {
  placeholder: string;
  handlePress?: (newItem: string) => void;
}

const AddItem = ({ placeholder, handlePress }: AddItemProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        value={inputValue}
        placeholder={placeholder}
        onChangeText={(value) => setInputValue(value)}
      />
      <CustomizedButton
        title="Add"
        handlePress={() => handlePress && handlePress(inputValue)}
      />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    columnGap: 3,
  },
  inputField: {
    width: 240,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
});
