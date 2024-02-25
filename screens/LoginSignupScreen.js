import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View className="pt-28">
      <View className="">
        <Text className="text-center font-bold text-3xl">MindFlex</Text>
      </View>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <View
        className={`flex-row justify-center ${isLogin ? "mt-20" : "mt-10"}`}
      >
        <Text>
          {isLogin ? "Don't have an account?" : "Have an account already?"}
        </Text>
        <TouchableOpacity onPress={toggleForm}>
          <Text className="text-mindflexGreen ml-1">
            {isLogin ? "Sign up" : "Log in"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSignupScreen;
