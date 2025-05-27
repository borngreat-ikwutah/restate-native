import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <Text>Welcome to Rescout</Text>
      </View>
    </SafeAreaView>
  );
}

export default Index;
