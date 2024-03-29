import { View, TouchableOpacity, Text } from "react-native";
import ContentSvg from "../assets/icons/content.svg";
import HappySvg from "../assets/icons/happy.svg";
import RelaxedSvg from "../assets/icons/relaxed.svg";
import AngrySvg from "../assets/icons/angry.svg";
import AnxiousSvg from "../assets/icons/anxious.svg";
import StressedSvg from "../assets/icons/stressed.svg";
import GratefulSvg from "../assets/icons/grateful.svg";
import TiredSvg from "../assets/icons/tired.svg";
import SadSvg from "../assets/icons/sad.svg";
import UnsureSvg from "../assets/icons/unsure.svg";

const MoodPicker = () => {
  const moodOptions = [
    { mood: "Content", icon: <ContentSvg width={40} height={50} /> },
    { mood: "Happy", icon: <HappySvg width={40} height={50} /> },
    { mood: "Relaxed", icon: <RelaxedSvg width={40} height={50} /> },
    { mood: "Angry", icon: <AngrySvg width={40} height={50} /> },
    { mood: "Anxious", icon: <AnxiousSvg width={40} height={50} /> },
    { mood: "Stressed", icon: <StressedSvg width={40} height={50} /> },
    { mood: "Grateful", icon: <GratefulSvg width={40} height={50} /> },
    { mood: "Tired", icon: <TiredSvg width={40} height={50} /> },
    { mood: "Sad", icon: <SadSvg width={40} height={50} /> },
    { mood: "Unsure", icon: <UnsureSvg width={40} height={50} /> },
  ];

  return (
    <View className="flex-row gap-x-4 mt-4">
      {moodOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          className="w-16 h-16 rounded-lg bg-gray-30 flex justify-center items-center"
        >
          {option.icon}
          <Text className="text-xs">{option.mood}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MoodPicker;
