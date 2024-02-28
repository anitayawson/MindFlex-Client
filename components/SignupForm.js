import { useState } from "react";
import { useAuth } from "./AuthContext";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import googleIcon from "../assets/icons/google-icon.png";
import { useNavigation } from "@react-navigation/native";

const SignupForm = () => {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");

  const [isEmpty, setIsEmpty] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Tabs", {
      screen: "Home",
    });
  };

  const handleSignUp = async () => {
    try {
      // Validation checks
      if (!name || !email || !password || !confirmPassword) {
        setIsEmpty(true);
        setNameError(!name ? "Name is required" : "");
        setEmailError(!email ? "Email is required" : "");
        setPasswordError(!password ? "Password is required" : "");
        setConfirmPasswordError(
          !confirmPassword ? "Confirm Password is required" : ""
        );
        return;
      }

      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        return;
      }

      if (!validatePassword(password)) {
        setPasswordError("Password must be at least 8 characters long");
        return;
      }

      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
        setConfirmPasswordError("Passwords do not match");
        return;
      }

      await signup({ name, email, password, confirmPassword });

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigateToHome();
    } catch (error) {
      console.error("Signup error:", error.message);
      setSignupError(
        "An error occurred while signing up. Please try again later."
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
    <View className="px-12 pt-10">
      <Text className="text-lg mb-6">Create an account</Text>
      {signupError && (
        <Text className="text-red-500 text-xs">{signupError}</Text>
      )}
      <View className={`flex-col ${isEmpty ? "gap-1" : "gap-y-4"}`}>
        {isEmpty && nameError && (
          <Text className="text-red-500 text-xs">{nameError}</Text>
        )}
        <TextInput
          className={`bg-white shadow-lg h-12 rounded-lg p-4 ${
            isEmpty && !name && " border border-red-500"
          }`}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {isEmpty && emailError && (
          <Text className="text-red-500 text-xs">{emailError}</Text>
        )}
        <TextInput
          className={`bg-white shadow-lg h-12 rounded-lg p-4 ${
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
        {isEmpty && confirmPasswordError && (
          <Text className="text-red-500 text-xs">{confirmPasswordError}</Text>
        )}
        <TextInput
          className={`bg-white shadow-lg h-12 rounded-lg p-4 ${
            isEmpty && !confirmPassword && "border border-red-500"
          }`}
          autoCapitalize="none"
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handleSignUp}
        className="bg-mindflexGreen flex-row justify-center items-center rounded-xl mt-6 h-12 shadow-xl"
      >
        <Text className="text-white ml-2 font-semibold">Sign up</Text>
      </TouchableOpacity>

      <Text className="text-center mt-12">- Or sign up with -</Text>
      <TouchableOpacity className="bg-white shadow-lg h-12  flex-row justify-center items-center rounded-xl mt-6">
        <Image source={googleIcon} className="w-8 h-8 mr-2" />
        <Text>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupForm;
