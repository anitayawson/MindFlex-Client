import { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import menuIcon from "../assets/icons/hamburger.png";
import profileIcon from "../assets/icons/profile.png";
import ReflectionModal from "../components/ReflectionModal";
import SideMenu from "../components/SideMenuModal";
import Modal from "react-native-modal";
import MoodPicker from "../components/MoodPicker";
import QuoteImg from "../assets/images/quote_of_the_day.jpeg";
import ExerciseCards from "../components/ExerciseCards";

const HomeScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [reflectionModalVisible, setReflectionModalVisible] = useState(false);

  const toggleSideMenuModal = () => {
    setSideMenuVisible(!sideMenuVisible);
  };

  const openReflectionModal = () => {
    setReflectionModalVisible(true);
  };

  const closeReflectionModal = () => {
    setReflectionModalVisible(false);
  };

  useEffect(() => {
    if (user && user.name) {
      setWelcomeMessage(`Welcome Back, ${user.name}!`);
    }
  }, [user]);

  if (user) {
    console.log("User Name:", user.name);
    console.log("User Email:", user.email);
  }

  return (
    <View className="flex-1 px-6 pt-16">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={toggleSideMenuModal}>
          <Image source={menuIcon} className="w-12 h-12 -m-2" />
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <Ionicons name="notifications" size={26} color="#4F997E" />
          <Image source={profileIcon} className="w-9 h-9 rounded-full" />
        </View>
      </View>

      <Text className="text-2xl font-semibold mb-4">{welcomeMessage}</Text>

      <View>
        <Text className="text-base mt-2">How Are You Feeling Today?</Text>
        {/* Mood Picker */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MoodPicker />
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={openReflectionModal}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-4 h-14 shadow-xl"
      >
        <Feather name="edit-3" size={22} color="white" />
        <Text className="text-white ml-2 font-semibold">
          Write a Reflection
        </Text>
      </TouchableOpacity>

      <Text className="text-base mt-4 mb-3">Quote of the day</Text>

      <View className="bg-mindflexBlue flex-row items-center h-32 rounded-2xl p-2">
        <Image source={QuoteImg} className="w-32 h-full rounded-2xl mr-4" />
        <View className="w-full">
          <Text className="text-xs w-48">
            Phone calls and social networks have their place, but few things can
            beat the mood-boosting power of quality face-to-face time.
          </Text>
        </View>
      </View>

      <ExerciseCards />

      <Modal
        className="ml-0 mb-0 mt-0"
        isVisible={sideMenuVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={() => setSideMenuVisible(false)}
        onBackButtonPress={() => setSideMenuVisible(false)}
      >
        <SideMenu closeModal={toggleSideMenuModal} />
      </Modal>

      <Modal
        className="mx-0 mb-0"
        isVisible={reflectionModalVisible}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
      >
        <ReflectionModal closeReflectionModal={closeReflectionModal} />
      </Modal>
    </View>
  );
};

export default HomeScreen;
