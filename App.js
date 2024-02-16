import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./components/MainTabNavigator";
import DrawerNavigator from "./components/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;
