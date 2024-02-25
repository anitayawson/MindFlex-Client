import { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import googleIcon from "../assets/icons/google-icon.png";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigateToHome = () => {
    navigation.navigate("Tabs", {
      screen: "Home",
    });
  };

  const handleLogin = () => {
    if (!email || !password) {
      setIsEmpty(true);
      setEmailError(!email ? "Email is required" : "");
      setPasswordError(!password ? "Password is required" : "");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      setPasswordError("");
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long");
      setEmailError("");
    } else {
      setIsEmpty(false);
      setEmailError("");
      setPasswordError("");
      navigateToHome();
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  return (
    <View className="px-12 pt-20">
      <Text className="text-lg mb-6">Log into your account</Text>
      <View className={`flex-col ${isEmpty ? "gap-2" : "gap-y-4"}`}>
        {isEmpty && emailError && (
          <Text className="text-red-500 text-xs">{emailError}</Text>
        )}
        <TextInput
          className={`bg-white shadow-sm h-12 rounded-lg p-4 ${
            isEmpty && !email && " border border-red-500"
          }`}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {isEmpty && passwordError && (
          <Text className="text-red-500 text-xs">{passwordError}</Text>
        )}
        <TextInput
          className={`bg-white shadow-lg h-12 rounded-lg p-4 ${
            isEmpty && !password && "border border-red-500"
          }`}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-12 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">Log in</Text>
      </TouchableOpacity>

      <Text className="text-center mt-12">- Or log in with -</Text>
      <TouchableOpacity className="bg-white shadow-sm h-12  flex-row justify-center items-center rounded-xl mt-6">
        <Image source={googleIcon} className="w-8 h-8 mr-2" />
        <Text>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
