import { View, Text, Pressable, StyleSheet } from "react-native";

const CustomButton = ({ children }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.log("hi")}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" ? styles.pressed : ""
        }
        android_ripple={{ color: "#961254", borderless: true }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c56695",
    borderRadius: 24,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 8,
  },
  pressed: {
    backgroundColor: "#961254",
    borderRadius: 24,
  },
});

export default CustomButton;
