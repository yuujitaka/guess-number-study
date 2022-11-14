import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "Bold",
    color: "white",
    textAlign: "center",
  },
});
