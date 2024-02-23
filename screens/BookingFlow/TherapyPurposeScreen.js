import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import backArrow from "../../assets/icons/left-arrow.png";

const TherapyPurposeScreen = ({ onNext, onBack }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onBack}>
        <Image source={backArrow} className="w-6 h-6 absolute top-6 z-50" />
      </TouchableWithoutFeedback>
      <Text className="text-center text-base font-bold mt-6">
        Purpose for booking
      </Text>
      <Text className="mt-6 text-base">
        Briefly explain why you are seeking therapy today. (Optional)
      </Text>
      <Text className="mt-4 mb-8 font-light">
        This will help your therapist have a general understanding of your needs
        before your session.
      </Text>

      <TextInput
        placeholder="Tell us more about your needs..."
        multiline
        className="border border-solid border-[#A6AA9D] rounded-2xl h-64 px-6 py-4"
      />
      <TouchableOpacity
        onPress={onNext}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-8 h-14 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">
          Continue to Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TherapyPurposeScreen;
