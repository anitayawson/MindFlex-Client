import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ReflectionScreen from "../screens/ReflectionsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Reflection" component={ReflectionScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
