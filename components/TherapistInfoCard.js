import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TherapistInfoCard = ({ therapists }) => {
  const navigation = useNavigation();

  return (
    <View className="px-6 mt-8 flex-row flex-wrap justify-between">
      {therapists.map((therapist) => (
        <TouchableOpacity
          key={therapist.id}
          // onPress={() => {
          //   navigation.navigate("Therapist Details", { therapists: therapist });
          // }}
        >
          <View className="bg-[#D9D9D9] w-[165px] h-48 rounded-xl mb-4 flex-col gap-1 items-center py-3">
            <Image
              className="rounded-full w-20 h-20"
              source={{
                uri: `http://localhost:8080/${therapist.image}`,
              }}
            />
            <Text className="font-bold">{therapist.name}</Text>
            <Text className="text-[13px]">{therapist.role}</Text>
            <Text className="text-center text-xs font-light">
              {therapist.location}
            </Text>
            <View>
              <Text className="font-bold text-xs">{therapist.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TherapistInfoCard;
