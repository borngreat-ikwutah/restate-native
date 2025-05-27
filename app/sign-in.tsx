import { Redirect } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "~/constants/icons";
import images from "~/constants/images";
import { Login } from "~/db/appwrite";
import { useGlobalAuth } from "~/db/auth-provider";

const SignIn = () => {
  const {refetch, isLoading, isLoggedIn } = useGlobalAuth();

  if(!isLoading && isLoggedIn) return <Redirect href="/"/>;
  
  const handleSignIn = async () => {
    const { created } = await Login();

    if (created) {
      refetch({})
    } else {
      Alert.alert(
        "Login Failed",
        "An error occurred while trying to sign in. Please try again."
      );
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Real Scout
          </Text>

          <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-4 ">
            Let’s get you closer to {"\n"}
            <Text className="font-rubik-bold text-primary-300">
              your Ideal home
            </Text>
          </Text>

          <Text className="text-base text-center font-rubik text-black-200 mt-12">
            Login to Rescout with Google
          </Text>

          <TouchableOpacity
            onPress={handleSignIn}
            className="bg-white shadow-md shadow-zinc-300 py-4 px-4 mt-5 rounded-lg w-full border border-zinc-300"
            key={`${Date.now()}-google-sign-in`}
          >
            <View className="flex flex-row items-center justify-center gap-2">
              <Image
                source={icons.google}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="text-base text-center font-rubik text-black-200">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
