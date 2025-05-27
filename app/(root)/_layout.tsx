import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalAuth } from "~/db/auth-provider";

export default function AppLayout() {
  const { isLoading, isLoggedIn } = useGlobalAuth();

  if (isLoading) {
    return (
      <SafeAreaView className="bg-white h-full flex items-center justify-center">
        <ActivityIndicator
          className="text-primary-300"
          size="large"
        />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
