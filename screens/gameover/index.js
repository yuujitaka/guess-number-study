import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

import Colors from "../../utils/colors";
import Title from "../../components/Title";
import CustomButton from "../../components/CustomButton";

const GameOver = ({ route, navigation }) => {
  const { chosenNumber, rounds } = route.params;

  const newGameHandler = () => {
    navigation.navigate("Start");
  };

  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{chosenNumber}</Text>
      </Text>
      <CustomButton onPress={newGameHandler}>Start New Game</CustomButton>
    </View>
  );
};

export default GameOver;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary[100],
    marginVertical: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 16,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary[50],
  },
});
