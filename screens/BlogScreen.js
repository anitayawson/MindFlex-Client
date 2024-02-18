import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import FeaturedBlogsCarousel from "../components/FeaturedBlogsCarousel";
import LatestBlogsCarousel from "../components/LatestBlogsCarousel";
import { FEATURED_BLOGS, LATEST_BLOGS } from "../data/index";

const BlogScreen = () => {
  return (
    <View>
      <View className="bg-mindflexGreen h-56 rounded-b-3xl px-6">
        <View className="flex-row justify-between items-center pt-16">
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="menu" size={30} color="#ffffff" />
          </TouchableOpacity>

          <View className="flex-row items-center gap-4">
            <TouchableOpacity className="bg-white/[0.2] p-2 rounded-lg">
              <Feather name="search" size={24} color="white" />
            </TouchableOpacity>
            {/* <TouchableOpacity className="bg-white/[0.2] p-2 rounded-lg">
              <Ionicons name="bookmark-outline" size={24} color="white" />
            </TouchableOpacity> */}
          </View>
        </View>
        <Text className="text-3xl mt-4 mb-4 text-white font-semibold">
          Curated BlogSpot
        </Text>
        <Text className="text-white">
          Get the health answers you need from our curated collection.
        </Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-6 pt-6">
            <View className="flex-row justify-between items-baseline">
              <Text className="text-base font-bold mb-4">
                Featured Blog Posts
              </Text>
              <TouchableOpacity className="border-b-2 border-mindflexOrange">
                <Text className="text-xs font-medium">View All</Text>
              </TouchableOpacity>
            </View>
            <FeaturedBlogsCarousel list={FEATURED_BLOGS} />
            <Text className="text-base font-bold my-4">Latest Blog Posts</Text>
          </View>
        }
        data={LATEST_BLOGS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="px-6">
            <LatestBlogsCarousel list={LATEST_BLOGS} />
          </View>
        )}
      />
    </View>
  );
};

export default BlogScreen;
