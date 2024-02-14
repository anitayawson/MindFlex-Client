import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
        <Text className="text-base mt-4">How are you feeling today?</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-4 mt-1">
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
            <TouchableOpacity
              className="w-20 h-20 rounded-lg bg-gray-300"
              onPress={() => {}}
            ></TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
