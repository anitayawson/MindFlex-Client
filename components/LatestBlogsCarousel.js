import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";

const LatestBlogsCarousel = ({ list }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>
            <View className="bg-[#D9D9D9] mr-3 h-48 w-full rounded-xl p-2 mt-1 mb-3 drop-shadow-xl">
              <Image
                source={item.image}
                className="h-28 w-full rounded-xl mb-2"
              />
              <Text className="mb-2 font-semibold">{item.title}</Text>
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-2">
                  <Image
                    source={item.author_image}
                    className="h-6 w-6 rounded-full"
                  />
                  <Text className="text-xs">{item.author}</Text>
                </View>
                <Text className="text-xs font-light">{item.date_posted}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default LatestBlogsCarousel;
