import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const BlogDetailsScreen = ({ route }) => {
  const { item } = route.params;

  const formatLongDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri: `http://localhost:8080/${item.thumbnail_image}`,
        }}
        className="h-80 w-full"
      />
      <Text className="text-2xl font-semibold mx-6 pt-4">{item.title}</Text>
      <View className="flex-row justify-between items-center mx-6 border-b border-solid border-[#A6AA9D]">
        <View className="flex-row items-center gap-4 pt-3 pb-4">
          <Image
            source={{ uri: `http://localhost:8080/${item.author_image}` }}
            className="h-8 w-8 rounded-full"
          />
          <Text className="font-bold text-xs">{item.author}</Text>
        </View>
        <Text className="text-xs font-light">
          {formatLongDate(item.date_posted)}
        </Text>
      </View>
      <Text className="mx-6 mt-4 font-light leading-5">{item.content}</Text>
    </ScrollView>
  );
};

export default BlogDetailsScreen;
