import {
  Alert,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { settings } from "~/constants/data";
import icons from "~/constants/icons";
import images from "~/constants/images";
import { LogOut } from "~/db/appwrite";
import { useGlobalAuth } from "~/db/auth-provider";

interface SettingItemsProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingItemsProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-4"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`font-rubik-medium text-lg text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-4" />}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalAuth();
  const handleLogout = async () => {
    const result = await LogOut();

    if (result.success) {
      Alert.alert("Success", "You have been logged out successfully.");
      refetch({});
    } else {
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="mt-5 flex flex-row items-center justify-between w-full">
          <Text className="font-rubik-bold text-xl">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="mt-5 flex flex-row justify-center">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar ?? user?.avatar}
              resizeMode="contain"
              className="size-44 rounded-full relative"
            />
            <TouchableOpacity className="absolute bottom-14 right-6">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="font-rubik-bold text-2xl mt-3">{user?.name}</Text>
          </View>
        </View>

        <View className="flex flex-col mt-10 gap-4">
          <SettingsItem
            icon={icons.calendar}
            title="My Bookings"
            onPress={() => {}}
          />
          <SettingsItem
            icon={icons.wallet}
            title="Payments"
            onPress={() => {}}
          />
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem {...item} key={index} />
          ))}
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            onPress={handleLogout}
            textStyle="text-red-500"
            showArrow={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
