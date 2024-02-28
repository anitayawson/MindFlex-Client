import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import profileIcon from "../assets/icons/profile.png";
import rightArrow from "../assets/icons/chevron-right.png";

const SideMenuModal = ({ closeModal }) => {
  const { user } = useAuth();
  const navigation = useNavigation();

  const buttonNames = [
    "Home",
    "My Reflections",
    "Payment Details",
    "Help Center",
    "Settings",
  ];

  const handleNavigation = (screenName) => {
    navigation.navigate("SideMenu", {
      screen: screenName,
    });
    closeModal();
  };

  const handleLogout = () => {
    navigation.navigate("LoginSignup");
  };

  return (
    <View className="bg-mindflexGreen h-full w-[70%] rounded py-20 pl-6 flex-col">
      <View className="flex-row mb-10 gap-x-2 items-center">
        <Image
          source={profileIcon}
          className="w-14 h-14 rounded-full"
          tintColor="white"
        />
        <View className="flex-col gap-y-1">
          <Text className="font-bold text-white">{user?.name}</Text>
          <Text className="text-white text-xs">{user?.email}</Text>
        </View>
        <Image source={rightArrow} className="w-10 h-10" tintColor="white" />
      </View>
      <View className="flex-col gap-y-12">
        {buttonNames.map((name, index) => (
          <TouchableOpacity key={index} onPress={() => handleNavigation(name)}>
            <Text className="text-white">{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        className="mt-auto border border-solid border-mindflexDarkGreen p-3 rounded-lg w-20"
      >
        <Text className="text-white">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenuModal;
