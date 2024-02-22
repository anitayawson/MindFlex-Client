import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import BlogDetailsScreen from "../screens/BlogDetailsScreen";
import TherapistDetailsScreen from "../screens/TherapistDetailsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Blog Details"
          component={BlogDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Therapist Details"
          component={TherapistDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
