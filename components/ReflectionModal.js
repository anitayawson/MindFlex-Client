import { Text, View, TouchableOpacity, TextInput } from "react-native";

const ReflectionModal = ({ closeModal }) => {
  return (
    <View className="border-solid border-2 border-black rounded-lg absolute bottom-0 px-6 w-full top-40 bg-white">
      <View className="flex-column items-center p-4 gap-3">
        <Text className="text-lg font-bold">Write a Reflection</Text>
        <Text className="text-normal">November 30, 4:43 pm</Text>
      </View>
      <View className="border-black text-normal">
        <TextInput placeholder="Add a title" className="h-16 " />
        <TextInput
          placeholder="Take a moment to reflect on your day and how you're feeling. Write about it here to help process your emotions and track your progress!"
          className="h-40"
          multiline={true}
          numberOfLines={8}
        />
      </View>

      <TouchableOpacity
        onPress={closeModal}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-14 shadow-xl"
      >
        <Text className="text-white font-semibold">Save Reflection</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReflectionModal;
