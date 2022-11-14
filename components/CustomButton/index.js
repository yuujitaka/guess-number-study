import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../utils/colors";

const CustomButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" ? styles.pressed : ""
        }
        android_ripple={{ color: Colors.primary[50], borderless: true }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary[100],
    borderRadius: 24,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 8,
  },
  pressed: {
    backgroundColor: Colors.primary[50],
    borderRadius: 24,
  },
});

export default CustomButton;
