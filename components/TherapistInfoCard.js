import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const TherapistInfoCard = ({ therapists }) => {
  return (
    <View className="px-6 mt-8 flex-row flex-wrap justify-between">
      {therapists.map((therapist) => (
        <TouchableOpacity key={therapist.id}>
          <View className="bg-[#D9D9D9] w-[165px] h-48 rounded-xl mb-4 flex-col items-center">
            <Image source={{ uri: therapist.image }} />
            <Text className="text-base font-bold">{therapist.name}</Text>
            <Text>{therapist.role}</Text>
            <Text className="text-center font-extralight">
              {therapist.location}
            </Text>
            <View>
              <Text className="font-bold">{therapist.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TherapistInfoCard;
