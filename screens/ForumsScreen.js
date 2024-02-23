import { View, Text } from "react-native";
import PageHeader from "../components/PageHeader";

const ForumsScreen = () => {
  return (
    <View>
      <PageHeader
        title="Forums"
        subtitle="Forums are regulated to ensure that everyone can speak openly about their mental health experiences."
      />
      <View className="flex-1 justify-center items-center">
        <Text>Welcome to the Forums Screen!</Text>
      </View>
    </View>
  );
};

export default ForumsScreen;
