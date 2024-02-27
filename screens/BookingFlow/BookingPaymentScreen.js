import { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import backArrow from "../../assets/icons/left-arrow.png";
import { CheckBox, Icon } from "@rneui/themed";
import { CardField, useStripe } from "@stripe/stripe-react-native";

const BookingPaymentScreen = ({ onNext, onBack, therapists }) => {
  const [paymentToken, setPaymentToken] = useState("");

  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

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
    <View className="flex-1">
      <TouchableWithoutFeedback onPress={onBack}>
        <Image source={backArrow} className="w-6 h-6 absolute top-6 z-50" />
      </TouchableWithoutFeedback>
      <Text className="text-center text-base font-bold mt-6">
        Payment Information
      </Text>
      <Text className="my-6 text-base">
        You will be charged ${therapists.price}.00 once your appointment is
        confirmed.
      </Text>
      <Text className="mb-6 text-base font-semibold">
        Add a new payment method
      </Text>
      <View>
        <Text className="mb-1">Name on Card</Text>
        <TextInput
          placeholder="Name"
          className="border border-solid border-[#C8D1E1] p-3 rounded-lg focus:border-mindflexGreen"
        />

        <Text className="mb-1 mt-1">16-digit Card Number</Text>
        <TextInput
          placeholder="1234 5678 9012 3456"
          className="border border-solid border-[#C8D1E1] p-3 rounded-lg focus:border-mindflexGreen"
        />
        <View className="flex-row gap-x-6 mt-1">
          <View className="flex-1">
            <Text className="mb-1">Expiration date</Text>
            <TextInput
              placeholder="MM / YY"
              className="border border-solid border-[#C8D1E1] p-3 rounded-lg focus:border-mindflexGreen"
            />
          </View>
          <View className="flex-1">
            <Text className="mb-1">CVV / CVC</Text>
            <TextInput
              placeholder="XXX"
              className="border border-solid border-[#C8D1E1]  p-3 rounded-lg focus:border-mindflexGreen"
            />
          </View>
        </View>
        <Text className="mt-2 mb-1">Postal Code</Text>
        <TextInput
          placeholder="XXXXXX"
          className="border border-solid border-[#C8D1E1] p-3 rounded-lg focus:border-mindflexGreen"
        />

        {/* Save payment */}
        <View className="flex-row items-center mt-1">
          <CheckBox
            containerStyle={{ marginLeft: -10, marginRight: 0 }}
            checked={checked}
            onPress={toggleCheckbox}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={"checkbox-blank-outline"}
            checkedColor="#4F997E"
          />
          <Text>Save this payment method</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onNext}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-8 h-14 shadow-xl absolute bottom-10 w-full"
      >
        <Text className="text-white ml-2 font-semibold">Complete Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingPaymentScreen;
