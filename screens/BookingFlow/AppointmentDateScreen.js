import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";

const AppointmentDateScreen = ({ onNext }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View>
      <Text className="text-center text-base font-bold mt-6">
        Select a Day and Time
      </Text>
      <Calendar
        className="my-4"
        current={selectedDate}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#4F997E" },
        }}
        onDayPress={onDayPress}
      />
      <ScrollView
        className="mt-4 mb-2"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity className="border-2 border-solid border-mindflexGreen mr-2 p-3 rounded-xl">
          <Text>9: 00 am</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-2 border-solid border-mindflexGreen mr-2 p-3  rounded-xl">
          <Text>10: 00 am</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-2 border-solid border-mindflexGreen mr-2 p-3  rounded-xl">
          <Text>12: 00 pm</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-2 border-solid border-mindflexGreen mr-2 p-3  rounded-xl">
          <Text>1: 00 pm</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border-2 border-solid border-mindflexGreen mr-2 p-3  rounded-xl">
          <Text>2: 30 pm</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        onPress={onNext}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-14 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">
          Continue to Therapy Purpose
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppointmentDateScreen;
