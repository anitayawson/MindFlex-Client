import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import locationIcon from "../assets/icons/map.png";
import timeIcon from "../assets/icons/time.png";
import moneyIcon from "../assets/icons/donate.png";
import BookingModal from "../components/BookingModal";

const TherapistDetailsScreen = ({ route }) => {
  const { therapists } = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const openBookingModal = () => {
    setModalVisible(true);
  };

  const closeBookingModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="pt-16 px-6">
      <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      <View className="flex-col items-center">
        <Image
          className="rounded-full w-28 h-28"
          source={{
            uri: `http://localhost:8080/${therapists.image}`,
          }}
        />
        <Text className="text-lg font-semibold mt-2">{therapists.name}</Text>
      </View>
      <View className="mt-4 px-6 flex-row items-center justify-between">
        <Text className="text-sm">{therapists.role}</Text>
        <Text>{therapists.rating}(121 reviews)</Text>
      </View>
      <View className="flex-col pt-2 pb-4 gap-y-1">
        <View className="flex-row gap-3 items-center">
          <Image source={locationIcon} className="w-7 h-7" />
          <Text className="text-sm">{therapists.location}</Text>
        </View>
        <View className="flex-row gap-3 items-center">
          <Image source={timeIcon} className="w-7 h-7" />
          <Text className="text-sm">
            {therapists.experience_years} years of experience
          </Text>
        </View>
        <View className="flex-row gap-3 items-center">
          <Image source={moneyIcon} className="w-7 h-7" />
          <Text className="text-sm">${therapists.price}/hr</Text>
        </View>
      </View>

      <Text className="font-light leading-5 my-2">{therapists.bio}</Text>
      <TouchableOpacity
        onPress={openBookingModal}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-14 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">
          Book An Appointment
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeBookingModal}
      >
        <BookingModal closeModal={closeBookingModal} therapists={therapists} />
      </Modal>
    </View>
  );
};

export default TherapistDetailsScreen;
