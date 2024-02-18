import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./navigators/MainTabNavigator";
import DrawerNavigator from "./navigators/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;
