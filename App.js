import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import StartGame from "./screens/startgame";

export default function App() {
  return <StartGame />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
