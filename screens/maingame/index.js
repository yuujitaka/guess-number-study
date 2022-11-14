import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../../components/Title";
import CustomButton from "../../components/CustomButton";
import generateRandomBetween from "../../utils/randomNumber";
import Colors from "../../utils/colors";
import RoundItem from "./RoundItem";

let minBoundary = 1;
let maxBoundary = 100;

const MainGame = ({ route, navigation }) => {
  const { chosenNumber } = route.params;
  const [guessNumber, setGuessNumber] = useState(
    generateRandomBetween(1, 100, chosenNumber)
  );
  const [rounds, setRounds] = useState([guessNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (guessNumber === chosenNumber) {
      navigation.navigate("Over", { chosenNumber, rounds: rounds.length });
    }
  }, [guessNumber, chosenNumber]);

  const nextGuess = (direction) => {
    if (
      (direction === "lower" && guessNumber < chosenNumber) ||
      (direction === "higher" && guessNumber > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = guessNumber;
    } else {
      minBoundary = guessNumber + 1;
    }

    const guess = generateRandomBetween(minBoundary, maxBoundary, guessNumber);

    setGuessNumber(guess);
    setRounds((prev) => [guess, ...prev]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{guessNumber}</Text>
      </View>
      <View>
        <Text>Lower or higher?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => nextGuess("lower")}>
              <Ionicons name="md-remove" size={18} color="white"></Ionicons>
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => nextGuess("higher")}>
              <Ionicons name="md-add" size={18} color="white"></Ionicons>
            </CustomButton>
          </View>
        </View>
      </View>
      <View style={styles.roundsContainer}>
        <FlatList
          data={rounds}
          renderItem={(itemData) => (
            <RoundItem
              round={rounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default MainGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 24,
  },
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: 24,
    marginVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  numberText: {
    color: Colors.secondary,
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 0.48,
  },
  roundsContainer: {
    flex: 1,
  },
});
