import { View, Text, Image } from "react-native";
import checkIcon from "../assets/icons/check.png";

const ReflectionNotificationModal = () => {
  return (
    <View className="p-6 bg-white flex-row justify-center">
      <Image source={checkIcon} />
      <Text className="font-semibold">Reflection Saved</Text>
    </View>
  );
};

export default ReflectionNotificationModal;
