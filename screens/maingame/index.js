import { Text, View, StyleSheet } from "react-native";

const MainGame = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
      <View></View>
    </View>
  );
};

export default MainGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
