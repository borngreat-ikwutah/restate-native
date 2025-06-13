import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";
import icons from "~/constants/icons";

const Search = () => {
  const pathname = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const debouncedSearch = useDebouncedCallback(
    (queryText: string) => router.setParams({ query: queryText }),
    500
  );

  const [searchQuery, setSearchQuery] = useState(params.query || "");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          className="text-sm font-rubik text-black-300 ml-2 flex-1 mt-1.5"
        />
      </View>

      <TouchableOpacity>
        <Image source={icons.filter} className="size-5 -mt-0." />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
