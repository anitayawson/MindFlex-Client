import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TherapistDetailsScreen = ({ route }) => {
  const { therapists } = route.params;

  return (
    <View className="">
      <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      <Text>{therapists.name}</Text>
    </View>
  );
};

export default TherapistDetailsScreen;
