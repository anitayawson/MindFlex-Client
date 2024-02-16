import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const TherapistsScreen = () => {
  return (
    <View>
      <View className="bg-mindflexGreen h-56 rounded-b-[40px] px-6">
        <View className="flex-row justify-between pt-16">
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="menu" size={30} color="#ffffff" />
          </TouchableOpacity>

          <View className="flex-row items-center gap-4">
            <Feather name="search" size={24} color="white" />
            <View>
              <Ionicons name="bookmark-outline" size={24} color="white" />
            </View>
          </View>
        </View>

        <Text className="text-3xl mt-4 mb-4 text-white font-semibold">
          Explore Therapists
        </Text>
        <Text className="text-white">
          Professional, licensed, and vetted therapists who you can trust
        </Text>
      </View>
    </View>
  );
};

export default TherapistsScreen;
