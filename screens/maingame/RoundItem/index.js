import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../utils/colors";

const RoundItem = ({ round, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{round}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default RoundItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary[50],
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
