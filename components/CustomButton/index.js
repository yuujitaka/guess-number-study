import { View, Text } from "react-native";

const CustomButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default CustomButton;
