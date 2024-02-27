import { AuthProvider } from "./components/AuthContext";
import MainNavigator from "./navigators/MainNavigator";

const App = () => {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  );
};

export default App;
