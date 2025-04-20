import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import BackButton from "../common/BackButton";

const VendorHeader = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <BackButton /> */}
      <Text style={styles.vendorName}>Lumona Mulengwa</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="heart-circle" size={34} color="#f3f3f3" />
      </TouchableOpacity>
    </View>
  );
};

export default VendorHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: heightPercentageToDP(2),
  },
  vendorName: {
    color: "#f3f3f3",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: heightPercentageToDP(2),
  },
});
