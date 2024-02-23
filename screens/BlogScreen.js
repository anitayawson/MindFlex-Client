import { useState, useEffect } from "react";
import axios from "axios";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import FeaturedBlogsCarousel from "../components/FeaturedBlogsCarousel";
import LatestBlogsList from "../components/LatestBlogsList";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../components/PageHeader";

const BlogScreen = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/blogs");
        const data = response.data;

        setFeaturedBlogs(data.slice(0, 3));
        setLatestBlogs(data.slice(3));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <View>
      <PageHeader
        title="Curated BlogSpot"
        subtitle="Get the health answers you need from our curated collection."
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="pl-6 pt-6">
            <View className="flex-row justify-between items-baseline">
              <Text className="text-base font-bold mb-4">
                Featured Blog Posts
              </Text>
              <TouchableOpacity className="border-b-2 mr-6 border-mindflexOrange">
                <Text className="text-xs font-medium">View All</Text>
              </TouchableOpacity>
            </View>
            <FeaturedBlogsCarousel list={featuredBlogs} />
            <Text className="text-base font-bold my-4">Latest Blog Posts</Text>
          </View>
        }
        data={latestBlogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="px-6">
            <LatestBlogsList item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default BlogScreen;
