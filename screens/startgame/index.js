import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import CustomButton from "../../components/CustomButton";
import Colors from "../../utils/colors";

const StartGame = ({ navigation }) => {
  const [inputNumber, setInputNumber] = useState("");

  const confirmHandler = () => {
    const chosenNumber = parseInt(inputNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInput,
        },
      ]);
      return false;
    }

    navigation.navigate("Main", { chosenNumber });
  };

  const resetInput = () => {
    setInputNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={inputNumber}
        onChangeText={(text) => setInputNumber(text)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={resetInput}>Reset</CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={confirmHandler}>Confirm</CustomButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary[10],
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 64,
    marginBottom: 8,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonContainer: {
    flex: 0.48,
  },
});
