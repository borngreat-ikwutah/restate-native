import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "~/constants/icons";
import images from "~/constants/images";

interface Props {
  onPress?: () => void;
}

export const FeatureCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />

      {/* HOUSE RATINGS VIEW */}
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full  absolute top-5 right-5 gap-2">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 text-center mt-[0.3px]">
          4.4
        </Text>
      </View>

      {/* HOUSE DETAILS VIEW */}
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>

        <Text className="text-base font-rubik text-white">Tokyo, Japan</Text>
        <View className="flex flex-row justify-between w-full mt-2">
          <Text className="text-xl font-rubik-bold text-white">$2,500</Text>
          <Image source={icons.heart} className="size-6" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex flex-row items-center bg-white/90 p-1 px-2 gap-2 z-50 rounded-full absolute top-5 right-5 ">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 text-center mt-[0.3px]">
          4.4
        </Text>
      </View>

      <Image source={images.newYork} className="w-full rounded-lg h-40" />

      {/* HOUSE DETAILS VIEW */}
      <View className="flex flex-col mt-2">
        <Text
          className="text-base font-rubik-bold text-black-300"
          numberOfLines={1}
        >
          Cozy Studio Apartment
        </Text>

        <Text className="text-base font-rubik text-black-200">Tokyo, Japan</Text>
        <View className="flex flex-row justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">$2,500</Text>
          <Image source={icons.heart} className="size-5 mr-2" tintColor="#191d31"/>
        </View>
      </View>
    </TouchableOpacity>
  );
};
