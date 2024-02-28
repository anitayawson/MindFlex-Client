import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";

const AppointmentDateScreen = ({ onNext }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [attemptedProceed, setAttemptedProceed] = useState(false);

  const today = new Date();
  const minDate = today.toISOString().substring(0, 10);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setAttemptedProceed(false);
  };

  const selectTime = (time) => {
    setSelectedTime(selectedTime === time ? "" : time);
    setAttemptedProceed(false);
  };

  const canProceed = selectedDate && selectedTime;

  const handleNext = () => {
    if (!canProceed) {
      setAttemptedProceed(true);
    } else {
      onNext(selectedDate, selectedTime);
    }
  };

  return (
    <View className="flex-1">
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
        minDate={minDate}
        theme={{
          arrowColor: "black",
          todayTextColor: "#4F997E",
          todayFontWeight: "bold",
          textSectionTitleColor: "black",
        }}
      />
      <ScrollView
        className="mt-4 mb-2 flex-grow-0"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {["9:00 am", "10:00 am", "12:00 pm", "1:00 pm", "2:30 pm"].map(
          (time) => (
            <TouchableOpacity
              key={time}
              className={`border border-solid border-mindflexGreen mr-2 p-3 rounded-xl ${
                selectedTime === time ? "bg-mindflexLightGreen" : ""
              }`}
              onPress={() => selectTime(time)}
            >
              <Text
                className={
                  selectedTime === time
                    ? "text-mindflexGreen font-semibold"
                    : ""
                }
              >
                {time}
              </Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={handleNext}
        className={`bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-14 shadow-xl absolute bottom-10 w-full ${
          canProceed ? "" : "opacity-50"
        }`}
        disabled={!canProceed}
      >
        <Text className="text-white ml-2 font-semibold">
          Continue to Therapy Purpose
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppointmentDateScreen;
