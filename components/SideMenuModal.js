import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import profileIcon from "../assets/icons/profile.png";

const SideMenuModal = () => {
  const navigation = useNavigation();

  const buttonNames = [
    "Home",
    "My Reflections",
    "Payment Details",
    "Help Center",
    "Settings",
  ];

  const handleNavigation = (screenName) => {
    navigation.navigate("SideMenu", { screen: screenName });
  };

  return (
    <View className="bg-white h-full w-[70%] rounded pt-20 pl-6">
      <View className="flex-row mb-10 gap-x-4">
        <Image source={profileIcon} className="w-9 h-9 rounded-full" />
        <View>
          <Text className="font-bold">User Full Name</Text>
          <Text>User Email Address</Text>
        </View>
      </View>
      <View className="flex-col gap-y-8">
        {buttonNames.map((name, index) => (
          <TouchableOpacity key={index} onPress={() => handleNavigation(name)}>
            <Text>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SideMenuModal;
