import menuIcon from "../assets/icons/hamburger.png";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PageHeader = ({ title, subtitle }) => {
  const navigation = useNavigation();

  return (
    <View className="bg-mindflexGreen h-52 rounded-b-3xl px-6">
      <View className="flex-row justify-between items-center pt-14">
        <TouchableOpacity>
          <Image
            source={menuIcon}
            className="w-12 h-12 -m-2"
            tintColor="white"
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white/[0.2] p-2 rounded-lg">
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text className="text-3xl mt-2 mb-4 text-white font-semibold">
        {title}
      </Text>
      <Text className="text-white">{subtitle} </Text>
    </View>
  );
};

export default PageHeader;
