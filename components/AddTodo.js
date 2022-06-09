import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="Add new Todo"
        onChangeText={changeHandler}
      />
      <Button
        title="Add Todo"
        color="coral"
        onPress={() => {
          addTodo(text);
          setText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
