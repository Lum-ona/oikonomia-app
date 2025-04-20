import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

interface Vendor {
  id: string;
  name: string;
  image: string;
}

const VendorsCard: React.FC<{ vendor: Vendor }> = ({ vendor }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/(stack)/vendorPage")}
      style={styles.card}
    >
      <Image source={{ uri: vendor.image }} style={styles.image} />
      <Text style={styles.name}>{vendor.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingLeft: 15,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
  },
  card: {
    backgroundColor: "#222",
    borderRadius: 15,
    marginRight: 10,
    paddingBottom: 5,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#777",
  },
  image: {
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(15),
    borderRadius: 15,
  },
  name: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: -10,
    fontWeight: "bold",
  },
});
export default VendorsCard;
