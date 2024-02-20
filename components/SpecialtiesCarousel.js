import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";

const SpecialtiesCarousel = ({
  specialties,
  selectedSpecialty,
  onSelectSpecialty,
}) => {
  return (
    <FlatList
      className="ml-6"
      horizontal
      showsHorizontalScrollIndicator={false}
      data={specialties}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelectSpecialty(item)}
          className={`mr-4 ${
            selectedSpecialty === item
              ? "border-b-2 border-mindflexOrange font-semibold"
              : ""
          }`}
        >
          <View className="pt-4">
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default SpecialtiesCarousel;
