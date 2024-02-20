import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BlogScreen from "../screens/BlogScreen";
import ExploreTherapistsScreen from "../screens/ExploreTherapistsScreen";
import ForumsScreen from "../screens/ForumsScreen";
import ExercisesScreen from "../screens/ExercisesScreen";
import { Image, Animated } from "react-native";
import HomeIcon from "../assets/icons/home.png";
import BlogsIcon from "../assets/icons/blogs.png";
import TherapyIcon from "../assets/icons/therapy.png";
import ForumsIcon from "../assets/icons/forums.png";
import ExercisesIcon from "../assets/icons/exercises.png";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#4F997E",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarStyle: {
            height: 90,
            display: "flex",
            alignItems: "center",
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "700",
            marginBottom: 2,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={HomeIcon}
                  className="h-8 w-8"
                  style={{ tintColor: focused ? "#4F997E" : "grey" }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Blogs"
          component={BlogScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={BlogsIcon}
                  className="h-7 w-7"
                  style={{ tintColor: focused ? "#4F997E" : "grey" }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Therapy"
          component={ExploreTherapistsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={TherapyIcon}
                  className="h-8 w-8"
                  style={{ tintColor: focused ? "#4F997E" : "grey" }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Forums"
          component={ForumsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={ForumsIcon}
                  className="h-8 w-8"
                  style={{ tintColor: focused ? "#4F997E" : "grey" }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Exercises"
          component={ExercisesScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={ExercisesIcon}
                  className="h-8 w-8"
                  style={{ tintColor: focused ? "#4F997E" : "grey" }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
      <Animated.View className="absolute w-3 h-[3px] bottom-6 left-[33px] bg-mindflexGreen z-50" />
    </>
  );
};

export default TabNavigator;
