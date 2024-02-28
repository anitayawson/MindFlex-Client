import { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import backArrow from "../../assets/icons/left-arrow.png";
import { CheckBox, Icon } from "@rneui/themed";
import { CardField, useStripe } from "@stripe/stripe-react-native";

const BookingPaymentScreen = ({
  onNext,
  onBack,
  therapists,
  selectedDate,
  selectedTime,
}) => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const canProceed =
    nameOnCard && cardNumber && expiryDate && cvv && postalCode;

  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleCompleteBooking = async () => {
    setIsLoading(true);

    // Simulate asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
      onNext(selectedDate, selectedTime);
    }, 2000);
  };

  return (
    <View className="flex-1">
      <TouchableWithoutFeedback onPress={onBack}>
        <Image source={backArrow} className="w-6 h-6 absolute top-6 z-50" />
      </TouchableWithoutFeedback>
      <Text className="text-center text-base font-bold mt-6">
        Payment Information
      </Text>
      <Text className="mt-6 text-base">
        You will be charged{" "}
        <Text className="font-bold">${therapists.price}.00</Text> once your
        appointment is confirmed.
      </Text>
      <Text className="mb-6 mt-3 text-base font-semibold">
        Add a new payment method
      </Text>
      <View>
        <Text className="mb-2">Name on Card</Text>
        <TextInput
          value={nameOnCard}
          onChangeText={(text) => setNameOnCard(text)}
          placeholder="Name"
          className="border border-solid border-[#C8D1E1] p-3 rounded-lg focus:border-mindflexGreen"
        />

        <Text className="mb-2 mt-1">16-digit Card Number</Text>
        <TextInput
          value={cardNumber}
          onChangeText={(text) => {
            // Removes non-numeric characters from input
            const formattedText = text.replace(/\D/g, "");
            // Formats the number in groups of 4 digits separated by spaces
            const formattedNumber = formattedText.replace(
              /(\d{4})(?=\d)/g,
              "$1 "
            );
            setCardNumber(formattedNumber);
          }}
          placeholder="1234 5678 9012 3456"
          className="border border-solid border-[#C8D1E1] p-3 rounded-lg focus:border-mindflexGreen"
        />
        <View className="flex-row gap-x-6 mt-1">
          <View className="flex-1">
            <Text className="mb-2">Expiration date</Text>
            <TextInput
              value={expiryDate}
              onChangeText={(text) => setExpiryDate(text)}
              placeholder="MM / YY"
              className="border border-solid border-[#C8D1E1] p-3 rounded-lg focus:border-mindflexGreen"
            />
          </View>
          <View className="flex-1">
            <Text className="mb-2">CVV / CVC</Text>
            <TextInput
              value={cvv}
              onChangeText={(text) => setCvv(text)}
              placeholder="XXX"
              className="border border-solid border-[#C8D1E1]  p-3 rounded-lg focus:border-mindflexGreen"
            />
          </View>
        </View>
        <Text className="mt-2 mb-2">Postal Code</Text>
        <TextInput
          value={postalCode}
          onChangeText={(text) => setPostalCode(text)}
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

      {/* Spinner overlay */}
      {isLoading && (
        <View className="absolute top-0 left-0 right-0 bottom-0 m-0 bg-white/[0.8] flex-row justify-center items-center">
          <View>
            <ActivityIndicator size="large" color="#4F997E" />
            <Text>Verifying Payment Information...</Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        onPress={handleCompleteBooking}
        disabled={!canProceed}
        className={`bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-8 h-14 shadow-xl absolute bottom-10 w-full ${
          !canProceed ? "opacity-50" : ""
        }`}
      >
        <Text className="text-white ml-2 font-semibold">Complete Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingPaymentScreen;
