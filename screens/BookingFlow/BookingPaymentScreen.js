import { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import backArrow from "../../assets/icons/left-arrow.png";
import { CardField, useStripe } from "@stripe/stripe-react-native";

const BookingPaymentScreen = ({ onNext, onBack, therapists }) => {
  const [paymentToken, setPaymentToken] = useState("");
  const { confirmPayment, handleCardAction } = useStripe();

  const handlePaymentSubmission = async () => {
    try {
      const { paymentIntent, error } = await confirmPayment({
        type: "Card",
        billingDetails: {
          email: "example@example.com",
        },
      });

      if (error) {
        console.log("Error:", error);
      } else {
        console.log("PaymentIntent:", paymentIntent);
        setPaymentToken(paymentIntent.paymentMethodId);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={onBack}>
        <Image source={backArrow} className="w-6 h-6 absolute top-6 z-50" />
      </TouchableWithoutFeedback>
      <Text className="text-center text-base font-bold mt-6">
        Payment Information
      </Text>
      <Text className="mt-6 text-base">
        Choose your preferred payment method.
      </Text>
      <Text className="mt-4">
        You will be charged ${therapists.price} once your therapy provider
        confirms your appointment.
      </Text>
      <TouchableOpacity
        onPress={onNext}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-8 h-14 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">Complete Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingPaymentScreen;
