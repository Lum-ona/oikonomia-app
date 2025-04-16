import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../../components/common/Header";
import ScreenWrapper from "@/components/layouts/ScreenWrapper";
import Products from "../../components/home/products/Products";
import SearchHeader from "../../components/common/SearchHeader";
import Vendors from "../../components/home/vendors/Vendors";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const sections = [{ id: "vendors" }, { id: "products" }];
  const router = useRouter();

  return (
    <ScreenWrapper>
      <Header router={router} />
      <SearchHeader />
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.id === "vendors" ? <Vendors /> : <Products />
        }
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
