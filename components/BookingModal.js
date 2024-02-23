import { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import closeIcon from "../assets/icons/close.png";
import AppointmentDateScreen from "../screens/BookingFlow/AppointmentDateScreen";
import TherapyPurposeScreen from "../screens/BookingFlow/TherapyPurposeScreen";
import BookingPaymentScreen from "../screens/BookingFlow/BookingPaymentScreen";
import ConfirmationScreen from "../screens/BookingFlow/ConfirmationScreen";

const BookingModal = ({ closeModal, therapists }) => {
  const [currentScreen, setCurrentScreen] = useState("appointmentDate");

  const renderScreen = () => {
    switch (currentScreen) {
      case "appointmentDate":
        return (
          <AppointmentDateScreen
            onNext={() => setCurrentScreen("therapyPurpose")}
          />
        );
      case "therapyPurpose":
        return (
          <TherapyPurposeScreen
            onBack={() => setCurrentScreen("appointmentDate")}
            onNext={() => setCurrentScreen("payment")}
          />
        );
      case "payment":
        return (
          <BookingPaymentScreen
            therapists={therapists}
            onBack={() => setCurrentScreen("therapyPurpose")}
            onNext={() => setCurrentScreen("confirmation")}
          />
        );
      case "confirmation":
        return (
          <ConfirmationScreen
            therapists={therapists}
            onBack={() => setCurrentScreen("payment")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1">
      <View className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black/[0.25]" />
      <View className="rounded-t-3xl absolute bottom-0 px-6 w-full top-64 bg-white z-10">
        <TouchableWithoutFeedback onPress={closeModal}>
          <Image
            onPress={closeModal}
            source={closeIcon}
            className="w-7 h-7 absolute right-6 top-6 z-50"
          />
        </TouchableWithoutFeedback>
        {renderScreen()}
      </View>
    </View>
  );
};

export default BookingModal;
