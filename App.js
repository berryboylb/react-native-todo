import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import SandBox from "./components/SandBox";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "play on the switch", key: 3 },
  ]);
  const addTodo = (text) => {
    if (text) {
      if (text.length > 3) {
         setTodos((todos) => {
           return [{ text, key: Math.random().toString() }, ...todos];
         });
      } else {
        Alert.alert("OOPS!", "Todo is too short", [
          {
            text: "UnderStood",
            onPress: () => console.log("Alert Closed"),
          },
        ]);
      }
     
    } else {
      console.log("Todo is empty");
      Alert.alert("OOPS!", "Text is empty", [
        {
          text: "UnderStood",
          onPress: () => console.log("Alert Closed"),
        },
      ]);
    }
  };
  const pressHandler = (key) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.key !== key);
    });
  };
  return (
    // <SandBox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex:1,
    marginTop: 20,
  },
});
