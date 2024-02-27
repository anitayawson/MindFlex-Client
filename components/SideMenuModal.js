import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import profileIcon from "../assets/icons/profile.png";

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
    <View className="bg-white h-full w-[70%] rounded py-20 pl-6 flex-col">
      <View className="flex-row mb-10 gap-x-2 items-center">
        <Image source={profileIcon} className="w-14 h-14 rounded-full" />
        <View>
          <Text className="font-bold">{user?.name}</Text>
          <Text>{user?.email}</Text>
        </View>
      </View>
      <View className="flex-col gap-y-12">
        {buttonNames.map((name, index) => (
          <TouchableOpacity key={index} onPress={() => handleNavigation(name)}>
            <Text>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleLogout} className="mt-auto">
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideMenuModal;
