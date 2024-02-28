import React from "react";
import { useAuth } from "../../components/AuthContext";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import backArrow from "../../assets/icons/left-arrow.png";
import checkIcon from "../../assets/icons/check.png";
import { useNavigation } from "@react-navigation/native";

const ConfirmationScreen = ({
  onBack,
  therapists,
  selectedDate,
  selectedTime,
}) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const handleReturnHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1">
      <TouchableWithoutFeedback onPress={onBack}>
        <Image source={backArrow} className="w-6 h-6 absolute top-6 z-50" />
      </TouchableWithoutFeedback>
      <Text className="text-center text-base font-bold mt-6">
        Appointment Confirmation
      </Text>
      <View className="flex-row justify-center pt-12">
        <Image source={checkIcon} className="w-20 h-20" />
      </View>
      <Text className="mt-6 mb-6 text-base text-center font-bold">
        Your appointment request has received!
      </Text>
      <View className="flex-col gap-y-2 my-4 items-center">
        <Text className="text-base">
          <Text className="font-semibold">Date:</Text> {selectedDate}
        </Text>
        <Text className="text-base">
          <Text className="font-semibold">Time:</Text> {selectedTime}
        </Text>
        <Text className="text-base">
          <Text className="font-semibold">With:</Text> {therapists.name}
        </Text>
      </View>
      <Text className="font-light text-center mt-8">
        We’ll send a confirmation email to {""}
        <Text className="font-bold">{user?.email}</Text> once your therapy
        provider confirms your appointment.
      </Text>
      <TouchableOpacity
        onPress={handleReturnHome}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-8 h-14 shadow-xl absolute bottom-10 w-full"
      >
        <Text className="text-white ml-2 font-semibold">Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationScreen;
