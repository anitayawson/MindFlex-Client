import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import locationIcon from "../assets/icons/map.png";
import timeIcon from "../assets/icons/time.png";
import moneyIcon from "../assets/icons/donate.png";
import ratingIcon from "../assets/icons/rating.png";
import BookingModal from "../components/BookingModal";

const TherapistDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { therapists } = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const openBookingModal = () => {
    setModalVisible(true);
  };

  const closeBookingModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="pt-16 px-6 flex-1">
      <TouchableOpacity
        className="absolute top-16 left-6 z-50"
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
      </TouchableOpacity>
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
        <View className="flex-row items-center">
          <Image source={ratingIcon} className="w-5 h-5" />
          <Text>
            {therapists.rating}
            <Text className="underline font-light">(121 reviews)</Text>
          </Text>
        </View>
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
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-14 shadow-xl absolute bottom-10 w-full self-center"
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
