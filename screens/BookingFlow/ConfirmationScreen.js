import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import backArrow from "../../assets/icons/left-arrow.png";
import { useNavigation } from "@react-navigation/native";

const ConfirmationScreen = ({ onBack, therapists }) => {
  const navigation = useNavigation();

  const handleReturnHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={onBack}>
        <Image source={backArrow} className="w-6 h-6 absolute top-6 z-50" />
      </TouchableWithoutFeedback>
      <Text className="text-center text-base font-bold mt-6">
        Appointment Requested
      </Text>
      <Text className="mt-16 text-base text-center font-semibold">
        Your appointment request has received!
      </Text>
      <Text>Date:</Text>
      <Text>With: {therapists.name}</Text>
      <Text className="font-light text-xs text-center">
        We’ll send a confirmation email to anya1234@gmail.com once your therapy
        provider confirms your appointment.
      </Text>
      <TouchableOpacity
        onPress={handleReturnHome}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-8 h-14 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationScreen;
