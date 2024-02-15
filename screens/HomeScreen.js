import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View className="flex-1 px-6 pt-16">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-8">
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="menu" size={30} color="#4F997E" />
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          <Ionicons name="notifications" size={26} color="#4F997E" />
          <View className="w-10 h-10 rounded-full bg-gray-300"></View>
        </View>
      </View>

      <Text className="text-2xl font-semibold mb-4">Welcome Back, User!</Text>

      <View>
        <Text className="text-base mt-4">How Are You Feeling Today?</Text>
        {/* Mood Picker */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-4 mt-1">
            <TouchableOpacity className="w-16 h-16 rounded-lg bg-mindflexBlue"></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexYellow"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexPink"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexLightGreen"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexLightOrange"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-mindflexTeal"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-16 h-16 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-14 shadow-xl">
        <Feather name="edit-3" size={22} color="white" />
        <Text className="text-white ml-2">Write a Reflection</Text>
      </TouchableOpacity>

      <Text className="text-base mt-6">Your Exercise Of The Day</Text>
      <View className="mt-4 bg-gray-300 w-full h-32 rounded-xl"></View>

      <View className="mt-4 bg-gray-300 w-full h-32 rounded-xl">
        <Text>Did you know</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
