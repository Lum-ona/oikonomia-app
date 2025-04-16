import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const VendorProductCard = (id = 1) => {
  const router = useRouter();
  const imageUrl =
    "https://images.pexels.com/photos/6193427/pexels-photo-6193427.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"; // Replace with actual image URL

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/(stack)/product/${id}`)}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <TouchableOpacity style={styles.heartButton}>
        <Text style={styles.heartText}>♡</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Cush Coat</Text>
        <Text style={styles.subtitle}>Urban Collection</Text>
        <Text style={styles.price}>$ 325.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VendorProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    width: widthPercentageToDP(46),
    alignItems: "center",
    marginBottom: heightPercentageToDP(2),
  },
  image: {
    width: "100%",
    height: heightPercentageToDP(30),
    borderRadius: 12,
    resizeMode: "cover",
    borderColor: "#777",
    borderWidth: StyleSheet.hairlineWidth,
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  heartText: {
    fontSize: 18,
    color: "white",
  },
  infoContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 12,
    color: "#d3d3d3",
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#c0e57b",
    marginTop: 5,
  },
});
