import Header from "@/components/common/Header";
import ScreenWrapper from "@/components/layouts/ScreenWrapper";
import SearchHeader from "@/components/talents/SearchHeader";
import UsersTalents from "@/components/talents/UsersTalents";
import UsersTalentsCards from "@/components/talents/UsersTalentsCards";
import { useRouter } from "expo-router";
import { FlatList, View } from "react-native";

export default function TabTwoScreen() {
  const data = [{ key: "UsersTalents" }, { key: "UsersTalentsCards" }];
  const router = useRouter();
  return (
    <ScreenWrapper>
      <Header router={router} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View>
            {item.key === "UsersTalents" ? (
              <>
                <UsersTalents />
                <SearchHeader placeholder="Search for TAALLent" />
              </>
            ) : (
              <UsersTalentsCards />
            )}
          </View>
        )}
      />
    </ScreenWrapper>
  );
}
