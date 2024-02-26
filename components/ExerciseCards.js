import { View, Text, Image, TouchableOpacity } from "react-native";
import gratitudeImg from "../assets/images/gratitude-exercise.jpg";
import breaks from "../assets/images/take-breaks.jpg";

const ExerciseCards = () => {
  return (
    <View className="mt-6">
      <Text className="text-base">Recommended Activities for you</Text>
      <View className="flex-row mt-3 gap-x-2 h-40">
        <TouchableOpacity className="bg-mindflexLightOrange p-2 rounded-2xl flex-1">
          <Image source={breaks} className="w-full h-20 rounded-xl" />
          <Text className="mt-2">Take Short Breaks</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-mindflexPink p-2 rounded-2xl flex-1">
          <Image source={gratitudeImg} className="w-full h-20 rounded-xl" />
          <Text className="mt-2">Show Gratitude</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseCards;
