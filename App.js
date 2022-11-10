import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/startgame";

export default function App() {
  return (
    <LinearGradient colors={["#ddb52f", "#480527"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.backgroundContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
