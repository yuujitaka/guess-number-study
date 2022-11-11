import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartGame from "./screens/startgame";
import MainGame from "./screens/maingame";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <LinearGradient colors={["#ddb52f", "#480527"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.backgroundContainer}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "transparent" },
              }}
            >
              <Stack.Screen name="Start" component={StartGame} />
              <Stack.Screen name="Main" component={MainGame} />
            </Stack.Navigator>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </NavigationContainer>
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
