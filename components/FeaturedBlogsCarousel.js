import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FeaturedBlogsCarousel = ({ list }) => {
  const [imageError, setImageError] = useState(false);
  const navigation = useNavigation();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <FlatList
      data={list}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Blog Details", { item: item });
            }}
          >
            <View className="bg-[#D9D9D9] mr-3 h-52 w-60 rounded-xl p-2 mt-1 drop-shadow-xl">
              <Image
                source={{
                  uri: `http://localhost:8080/${item.thumbnail_image}`,
                }}
                className="h-28 w-full rounded-xl mb-2"
                onError={(e) => {
                  console.log("Image error:", e.nativeEvent.error);
                  setImageError(true);
                }}
              />
              <Text className="mb-2 font-semibold">{item.title}</Text>
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-2">
                  <Image
                    source={{
                      uri: `http://localhost:8080/${item.author_image}`,
                    }}
                    className="h-6 w-6 rounded-full"
                    onError={() => setImageError(true)}
                  />
                  <Text className="text-xs">{item.author}</Text>
                </View>
                <Text className="text-xs font-light">
                  {formatDate(item.date_posted)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default FeaturedBlogsCarousel;
