import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const BlogScreen = () => {
  return (
    <View>
      <View className="bg-mindflexGreen h-56 rounded-b-3xl px-6">
        <View className="flex-row justify-between pt-16">
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="menu" size={30} color="#ffffff" />
          </TouchableOpacity>

          <View className="flex-row items-center gap-4">
            <TouchableOpacity className="bg-white/[0.2] p-1 rounded-lg">
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-3xl mt-4 mb-4 text-white font-semibold">
          Curated BlogSpot
        </Text>
        <Text className="text-white">
          Get the health answers you need from our curated collection.
        </Text>
      </View>

      <View className="px-6 mt-8">
        <View className="flex-row justify-between items-baseline">
          <Text className="text-base font-bold mb-4">Featured Blog Posts</Text>
          <TouchableOpacity>
            <Text className="text-sm underline decoration-[40px] decoration-mindflexOrange">
              View All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BlogScreen;
