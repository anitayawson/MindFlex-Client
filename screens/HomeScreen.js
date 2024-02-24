import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import menuIcon from "../assets/icons/hamburger.png";
import profileIcon from "../assets/icons/profile.png";
import ContentSvg from "../assets/icons/content.svg";
import HappySvg from "../assets/icons/happy.svg";
import RelaxedSvg from "../assets/icons/relaxed.svg";
import AngrySvg from "../assets/icons/angry.svg";
import AnxiousSvg from "../assets/icons/anxious.svg";
import StressedSvg from "../assets/icons/stressed.svg";
import GratefulSvg from "../assets/icons/grateful.svg";
import TiredSvg from "../assets/icons/tired.svg";
import SadSvg from "../assets/icons/sad.svg";
import UnsureSvg from "../assets/icons/unsure.svg";
import ReflectionModal from "../components/ReflectionModal";
import SideMenu from "../components/SideMenuModal";
import Modal from "react-native-modal";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleSideMenuModal = () => {
    setModalVisible(!modalVisible);
  };

  const openReflectionModal = () => {
    setModalVisible(true);
  };

  const closeReflectionModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="flex-1 px-6 pt-16">
      <View className="flex-row justify-between items-center mb-8">
        <TouchableOpacity onPress={toggleSideMenuModal}>
          <Image source={menuIcon} className="w-12 h-12 -m-2" />
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <Ionicons name="notifications" size={26} color="#4F997E" />
          <Image source={profileIcon} className="w-9 h-9 rounded-full" />
        </View>
      </View>

      <Text className="text-2xl font-semibold mb-4">Welcome Back, User!</Text>

      <View>
        <Text className="text-base mt-4">How Are You Feeling Today?</Text>
        {/* Mood Picker */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-4 mt-1">
            <TouchableOpacity className="w-16 h-16 rounded-lg bg-mindflexBlue flex justify-center items-center">
              <ContentSvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexYellow flex justify-center items-center"
              onPress={() => {}}
            >
              <HappySvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexPink flex justify-center items-center"
              onPress={() => {}}
            >
              <RelaxedSvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexLightGreen flex justify-center items-center"
              onPress={() => {}}
            >
              <AngrySvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexLightOrange flex justify-center items-center"
              onPress={() => {}}
            >
              <AnxiousSvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexTeal flex justify-center items-center"
              onPress={() => {}}
            >
              <StressedSvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexPurple flex justify-center items-center"
              onPress={() => {}}
            >
              <GratefulSvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexDarkGreen flex justify-center items-center"
              onPress={() => {}}
            >
              <TiredSvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-gray-300 flex justify-center items-center"
              onPress={() => {}}
            >
              <SadSvg width={40} height={50} />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-gray-300 flex justify-center items-center"
              onPress={() => {}}
            >
              <UnsureSvg width={40} height={50} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={openReflectionModal}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-14 shadow-xl"
      >
        <Feather name="edit-3" size={22} color="white" />
        <Text className="text-white ml-2 font-semibold">
          Write a Reflection
        </Text>
      </TouchableOpacity>

      <Modal
        className="ml-0 mb-0 mt-0"
        isVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
      >
        <SideMenu closeModal={toggleSideMenuModal} />
      </Modal>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeReflectionModal}
      >
        <ReflectionModal closeModal={closeReflectionModal} />
      </Modal> */}
    </View>
  );
};

export default HomeScreen;
