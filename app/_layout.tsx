import { SplashScreen, Stack } from "expo-router";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  const [fontsloaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
  });

  useEffect(()=> {
    if(!fontsloaded) {
      // console.warn("Fonts are not loaded yet");
      SplashScreen.hideAsync()
    }
  }, [fontsloaded])

  if(!fontsloaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
