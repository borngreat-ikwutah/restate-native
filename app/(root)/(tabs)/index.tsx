import { Link } from "expo-router";
import { Text, View } from "react-native";

function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="font-bold text-blue-500 text-2xl my-10">
        Sign In
      </Text>
      <Link href="/sign-in">Click Here to Sign In</Link>
      <Link href="/properties/1">Go to Property 1</Link>
    </View>
  );
}

export default Index;