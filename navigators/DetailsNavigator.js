import { createStackNavigator } from "@react-navigation/stack";
import TherapistDetailsScreen from "../screens/TherapistDetailsScreen";
import BlogDetailsScreen from "../screens/BlogDetailsScreen";

const Stack = createStackNavigator();

const DetailsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Therapist Details"
        component={TherapistDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Blog Details"
        component={BlogDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DetailsNavigator;
