import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const Products = () => {
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
    {
      id: "4",
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
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <ProductCard
          key={index}
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
      contentContainerStyle={{
        marginBottom: heightPercentageToDP(20),
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
        width: widthPercentageToDP(95),
      }}
      ListHeaderComponent={
        <Text
          style={{
            color: "#f3f3f3",
            fontSize: 16,
            fontWeight: "700",
            marginBottom: heightPercentageToDP(1),
          }}
        >
          All Products
        </Text>
      }
    />
  );
};

export default Products;

const styles = StyleSheet.create({});
