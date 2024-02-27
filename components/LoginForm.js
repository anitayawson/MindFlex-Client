import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import googleIcon from "../assets/icons/google-icon.png";

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [isEmpty, setIsEmpty] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Tabs", {
      screen: "Home",
    });
  };

  const handleLogin = async () => {
    try {
      // Validation checks
      if (!email || !password) {
        setIsEmpty(true);
        setEmailError(!email ? "Email is required" : "");
        setPasswordError(!password ? "Password is required" : "");
        return;
      }

      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        setPasswordError("");
        return;
      }

      if (!validatePassword(password)) {
        setPasswordError("Password must be at least 8 characters long");
        setEmailError("");
        return;
      }

      await login({ email, password });

      setEmail("");
      setPassword("");

      navigateToHome();
    } catch (error) {
      console.error("Login error:", error.message);
      setLoginError(
        "An error occurred while logging you in. Please try again later."
      );
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
      {loginError && (
        <Text className="text-red-500 text-xs mb-1">{loginError}</Text>
      )}
      <View className={`flex-col ${isEmpty ? "gap-1" : "gap-y-4"}`}>
        {isEmpty && emailError && (
          <Text className="text-red-500 text-xs">{emailError}</Text>
        )}
        <TextInput
          className={`bg-white shadow-sm h-12 rounded-lg p-4 ${
            isEmpty && !email && " border border-red-500"
          }`}
          autoCapitalize="none"
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
          autoCapitalize="none"
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
