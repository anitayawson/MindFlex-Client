import { useState } from "react";
import menuIcon from "../assets/icons/hamburger.png";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SideMenu from "./SideMenuModal";
import Modal from "react-native-modal";

const PageHeader = ({ title, subtitle }) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const toggleSideMenuModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View className="bg-mindflexGreen h-52 rounded-b-3xl px-6">
      <View className="flex-row justify-between items-center pt-14">
        <TouchableOpacity onPress={toggleSideMenuModal}>
          <Image
            source={menuIcon}
            className="w-12 h-12 -m-2"
            tintColor="white"
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white/[0.2] p-2 rounded-lg">
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text className="text-3xl mt-2 mb-4 text-white font-semibold">
        {title}
      </Text>
      <Text className="text-white">{subtitle} </Text>
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
    </View>
  );
};

export default PageHeader;
