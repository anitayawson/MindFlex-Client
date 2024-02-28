import { useState } from "react";
import { useAuth } from "./AuthContext";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import closeIcon from "../assets/icons/close.png";

const ReflectionModal = ({ closeReflectionModal, setNotificationVisible }) => {
  const { user, updateUser } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const formatCurrentTime = () => {
    const options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  const saveReflection = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/reflections",
        {
          title,
          content,
          userId: user.id,
        }
      );
      // console.log("Reflection saved:", response.data);
      closeReflectionModal();
      // Refetch user data to update user information
      const userResponse = await axios.get(
        `http://localhost:8080/api/users/${user.id}`
      );
      updateUser(userResponse.data);
      setNotificationVisible(true);
    } catch (error) {
      console.error("Error saving reflection:", error);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <View className="flex-1">
            <View className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black/[0.25]" />

            <View className="rounded-t-3xl absolute bottom-0 px-6 w-full top-40 bg-white z-10">
              <TouchableWithoutFeedback onPress={closeReflectionModal}>
                <Image
                  source={closeIcon}
                  className="w-7 h-7 absolute right-6 top-6 z-50"
                />
              </TouchableWithoutFeedback>
              <View className="flex-column items-center pt-6 gap-5">
                <Text className="text-base font-bold">Write a Reflection</Text>
                <Text className="text-normal">{formatCurrentTime()}</Text>
              </View>
              <View className="border border-solid border-[#A6AA9D] h-3/5 rounded-2xl mt-6">
                <TextInput
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                  className="w-full px-6 py-4 text-base border-b border-solid border-[#A6AA9D]"
                  placeholder="Add a title"
                />
                <ScrollView>
                  <TextInput
                    value={content}
                    onChangeText={(text) => setContent(text)}
                    className="w-full px-6 pt-4 text-sm"
                    placeholder="Take a moment to reflect on your day and how you're feeling. Writing about it can help you process your emotions and track your progress!"
                    multiline
                  />
                </ScrollView>
              </View>
              <TouchableOpacity
                onPress={saveReflection}
                className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-10 h-14 shadow-xl"
              >
                <Text className="text-white font-semibold">
                  Save Reflection
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ReflectionModal;
