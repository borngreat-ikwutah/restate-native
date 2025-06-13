import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, FeatureCard } from "~/components/cards";
import Filters from "~/components/filters";
import Search from "~/components/search";
import icons from "~/constants/icons";
import { useGlobalAuth } from "~/db/auth-provider";
import { getGreetingBasedOnTime } from "~/utils";

function Index() {
  const time = new Date();

  const { user } = useGlobalAuth();

  const avatarUri = user?.name
    ? `https://api.dicebear.com/9.x/adventurer/png?seed=${user.name}&size=176`
    : null;
  return (
    <SafeAreaView className="bg-white h-full ">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={() => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={{ uri: avatarUri || "" }}
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    {getGreetingBasedOnTime(time)}
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>

              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />

            {/* FEATURED  AND RECOMMENDATION LISTS */}
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={[1, 2, 3]}
                renderItem={() => <FeatureCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex flex-row gap-5 mt-5"
              />
            </View>

            {/* OUR RECOMMENDATION LISTS */}
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our Recommendations
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />
            {/* <View className="flex flex-row gap-5 mt-5">
          <Card />
          <Card />
        </View> */}
          </View>
        }
      />
    </SafeAreaView>
  );
}

export default Index;
