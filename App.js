import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./components/MainTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}
