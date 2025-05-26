import { Link } from "expo-router";
import { Text, View } from "react-native";

function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-blue-500 text-3xl my-10 font-rubik-extrabold">
        Sign In
      </Text>
      <Link href="/sign-in" className="text-blue-500 font-rubik">
        Click Here to Sign In
      </Link>
      <Link href="/properties/1" className="text-blue-500 font-rubik">
        Go to Property 1
      </Link>
    </View>
  );
}

export default Index;