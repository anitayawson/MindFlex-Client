import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BlogScreen from "../screens/BlogScreen";
import TherapistsScreen from "../screens/TherapistsScreen";
import ForumsScreen from "../screens/ForumsScreen";
import ExercisesScreen from "../screens/ExercisesScreen";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#4F997E",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 80,
  },
  tabBarActiveTintColor: "#FFFFFF",
  tabBarInactiveTintColor: "#9CC9B8",
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={BlogScreen}
        options={{
          tabBarLabel: "Blog",
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-text" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Therapists"
        component={TherapistsScreen}
        options={{
          tabBarLabel: "Therapy",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Forums"
        component={ForumsScreen}
        options={{
          tabBarLabel: "Forums",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={ExercisesScreen}
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <Feather name="layers" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
