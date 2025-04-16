import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import VendorProductCard from "./VendorProductCard";
import Carousel from "./Carousel"; // Import Carousel here
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const data = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/31173340/pexels-photo-31173340/free-photo-of-delicious-asian-cuisine-in-bamboo-steamer.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    brand: "H&M",
    rating: 4.8,
    review: 2,
    title: "Clothy Cloth",
    price: 234,
    oldPrice: 245,
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/31173340/pexels-photo-31173340/free-photo-of-delicious-asian-cuisine-in-bamboo-steamer.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    brand: "H&M",
    rating: 4.8,
    review: 2,
    title: "Clothy Cloth",
    price: 234,
    oldPrice: 245,
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/31173340/pexels-photo-31173340/free-photo-of-delicious-asian-cuisine-in-bamboo-steamer.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    brand: "H&M",
    rating: 4.8,
    review: 2,
    title: "Clothy Cloth",
    price: 234,
    oldPrice: 245,
  },
];

const VendorProducts = () => {
  const router = useRouter();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id} // Ensure a unique key
      renderItem={({ item }) => (
        <VendorProductCard
          id={item.id}
          image={item.image}
          brand={item.brand}
          rating={item.rating}
          reviews={item.review}
          title={item.title}
          price={item.price}
          oldPrice={item.oldPrice}
        />
      )}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: heightPercentageToDP(2),
            }}
          >
            <Text
              style={{
                color: "#f3f3f3",
                fontSize: 20,
                fontWeight: "700",
                marginBottom: heightPercentageToDP(2),
              }}
            >
              Lumona Mulengwa
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="heart-circle" size={34} color="#f3f3f3" />
            </TouchableOpacity>
          </View>
          <Carousel />
          <Text
            style={{
              color: "#f3f3f3",
              fontSize: 20,
              fontWeight: "500",
              marginBottom: heightPercentageToDP(1),
            }}
          >
            Products
          </Text>
        </View>
      } // Add Carousel as a header
    />
  );
};

export default VendorProducts;

const styles = StyleSheet.create({
  list: {
    paddingBottom: heightPercentageToDP(5),
  },
});
