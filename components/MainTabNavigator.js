import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BlogScreen from "../screens/BlogScreen";
import TherapistsScreen from "../screens/TherapistsScreen";
import ForumsScreen from "../screens/ForumsScreen";
import ExercisesScreen from "../screens/ExercisesScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{ tabBarLabel: "Blog" }}
      />
      <Tab.Screen
        name="Therapists"
        component={TherapistsScreen}
        options={{ tabBarLabel: "Therapy" }}
      />
      <Tab.Screen
        name="Forums"
        component={ForumsScreen}
        options={{ tabBarLabel: "Forums" }}
      />
      <Tab.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{ tabBarLabel: "Exercises" }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
