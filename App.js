import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartGame from "./screens/startgame";
import MainGame from "./screens/maingame";
import GameOver from "./screens/gameover";
import Colors from "./utils/colors";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <LinearGradient
        colors={[Colors.primary[10], Colors.secondary]}
        style={styles.rootScreen}
      >
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
              <Stack.Screen name="Over" component={GameOver} />
            </Stack.Navigator>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </NavigationContainer>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    padding: deviceWidth < 380 ? 12 : 16,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
