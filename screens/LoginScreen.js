import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import googleIcon from "../assets/icons/google-icon.png";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const navigateToHome = () => {
    navigation.navigate("Tabs", {
      screen: "Home",
    });
  };

  return (
    <View className="px-12 pt-36">
      <View className="">
        <Text className="text-center font-bold text-3xl mb-16">MindFlex</Text>
      </View>
      <Text className="text-lg mb-6">Log into your account</Text>
      <View className="flex-col gap-y-4">
        <TextInput
          className="bg-white shadow-sm h-12 rounded-lg p-4"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          className="bg-white shadow-lg h-12 rounded-lg p-4"
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={navigateToHome}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-12 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">Log in</Text>
      </TouchableOpacity>

      <Text className="text-center mt-12">- Or log in with -</Text>
      <TouchableOpacity className="bg-white shadow-sm h-12 flex-row justify-center items-center rounded-xl mt-6">
        <Image source={googleIcon} className="w-8 h-8 mr-2" />
        <Text>Google</Text>
      </TouchableOpacity>

      <View className="flex-row gap-x-1 justify-center mt-20">
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text className="text-mindflexGreen font-semibold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
