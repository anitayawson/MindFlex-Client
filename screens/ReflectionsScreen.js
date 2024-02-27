import { useState, useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import axios from "axios";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import menuIcon from "../assets/icons/hamburger.png";
import deleteIcon from "../assets/icons/delete.png";
import addIcon from "../assets/icons/add.png";
import { Feather } from "@expo/vector-icons";
import SideMenu from "../components/SideMenuModal";
import Modal from "react-native-modal";
import { useRoute } from "@react-navigation/native";

const ReflectionsScreen = () => {
  const { user, updateUser } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);
  const [reflections, setReflections] = useState([]);

  const toggleSideMenuModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    const fetchReflections = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/reflections/user/${user.id}`
        );
        setReflections(response.data);
      } catch (error) {
        console.error("Error fetching reflections:", error);
      }
    };

    fetchReflections();
  }, [user.id, updateUser]);

  return (
    <View className="pt-16 px-6 flex-1">
      <View className="flex-row items-center justify-between">
        <TouchableOpacity onPress={toggleSideMenuModal}>
          <Image source={menuIcon} className="w-12 h-12 -m-2" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white/[0.2] p-2 rounded-lg">
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text className="text-2xl mt-6">My Reflections</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {reflections.length > 0 ? ( // Check if reflections exist
          <View className="pt-6">
            {reflections
              .slice()
              .reverse()
              .map((reflection, index) => (
                <View
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md mb-4"
                >
                  <Text className="font-semibold text-lg mb-2">
                    {reflection.title}
                  </Text>
                  <Text>{reflection.content}</Text>
                  <View className="flex-row justify-between items-center mt-3">
                    <Text>{reflection.date}</Text>
                    <Image source={deleteIcon} className="w-4 h-4" />
                  </View>
                </View>
              ))}
          </View>
        ) : (
          <View className="flex-row justify-center items-center h-2/3">
            <Text className="text-base mt-6 font-semibold">
              You don't have any reflections yet.
            </Text>
          </View>
        )}
      </ScrollView>

      <Image
        source={addIcon}
        className="w-14 h-14 absolute bottom-16 right-6"
        tintColor="#4F997E"
      />
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

export default ReflectionsScreen;
