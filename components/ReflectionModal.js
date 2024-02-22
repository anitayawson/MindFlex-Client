import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import closeIcon from "../assets/icons/close.png";

const ReflectionModal = ({ closeModal }) => {
  const formatCurrentTime = () => {
    const options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <View className="flex-1">
            <View className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black/[0.25]" />

            <View className="rounded-t-3xl absolute bottom-0 px-6 w-full top-40 bg-white z-10">
              <TouchableOpacity>
                <Image
                  source={closeIcon}
                  className="w-7 h-7 absolute right-0 top-6"
                />
              </TouchableOpacity>
              <View className="flex-column items-center pt-6 gap-5">
                <Text className="text-base font-bold">Write a Reflection</Text>
                <Text className="text-normal">{formatCurrentTime()}</Text>
              </View>
              <View className="border border-solid border-[#A6AA9D] h-3/5 rounded-2xl mt-6">
                <TextInput
                  className="w-full px-6 py-4 text-base border-b border-solid border-[#A6AA9D]"
                  placeholder="Add a title"
                />
                <ScrollView>
                  <TextInput
                    className="w-full px-6 pt-4 text-base"
                    placeholder="Take a moment to reflect on your day and how you're feeling. Writing about it can help you process your emotions and track your progress!"
                    multiline
                  />
                </ScrollView>
              </View>
              <TouchableOpacity
                onPress={closeModal}
                className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-10 h-14 shadow-xl"
              >
                <Text className="text-white font-semibold">
                  Save Reflection
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ReflectionModal;
