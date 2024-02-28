import { View, Text, Image, TouchableOpacity } from "react-native";
import gratitudeImg from "../assets/images/gratitude-exercise.jpg";
import rightArrow from "../assets/icons/chevron-right.png";
import timeIcon from "../assets/icons/time.png";
import audioIcon from "../assets/icons/audio.png";

import breaks from "../assets/images/take-breaks.jpg";

const ExerciseCards = () => {
  return (
    <View className="mt-6">
      <Text className="text-base">Recommended Activities for you</Text>
      <View className="flex-row mt-3 gap-x-2 h-40">
        <TouchableOpacity className="bg-mindflexYellow p-2 rounded-2xl flex-1">
          <Image source={breaks} className="w-full h-24 rounded-xl" />
          <View className="flex-row justify-between items-center">
            <Text>Take Short Breaks</Text>
            <Image source={rightArrow} className="w-8 h-8" />
          </View>
          <View className="flex-row gap-x-1">
            <View className="flex-row gap-x-1 items-center">
              <Image source={timeIcon} className="w-4 h-4" />
              <Text className="text-xs">2:30 m.</Text>
            </View>
            <View className="flex-row gap-x-1 items-center">
              <Image source={audioIcon} className="w-4 h-4" />
              <Text className="text-xs">Audio</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-mindflexPink p-2 rounded-2xl flex-1">
          <Image source={gratitudeImg} className="w-full h-24 rounded-xl" />
          <View className="flex-row justify-between items-center">
            <Text>Practice Gratitude</Text>
            <Image source={rightArrow} className="w-8 h-8" />
          </View>
          <View className="flex-row gap-x-1">
            <View className="flex-row gap-x-1 items-center">
              <Image source={timeIcon} className="w-4 h-4" />
              <Text className="text-xs">56 sec.</Text>
            </View>
            <View className="flex-row gap-x-1 items-center">
              <Image source={audioIcon} className="w-4 h-4" />
              <Text className="text-xs">Audio</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExerciseCards;
