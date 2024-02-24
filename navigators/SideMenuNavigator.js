import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReflectionsScreen from "../screens/ReflectionsScreen";
import PaymentScreen from "../screens/PaymentScreen";

const Stack = createStackNavigator();

const SideMenuNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Reflections"
        component={ReflectionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment Details"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SideMenuNavigator;
