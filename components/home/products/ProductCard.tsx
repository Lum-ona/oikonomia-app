import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

type ProductCardProps = {
  id: string;
  image: string;
  brand: string;
  rating: number;
  reviews: number;
  title: string;
  price: number;
  oldPrice?: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  brand,
  rating,
  reviews,
  title,
  price,
  oldPrice,
}) => {
  const [liked, setLiked] = useState(false);
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/product/${id}`)}
    >
      {/* Product Image + Like Button */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => setLiked(!liked)}
        >
          <FontAwesome
            name="heart"
            size={20}
            color={liked ? "red" : "#f3f3f3"}
          />
        </TouchableOpacity>
      </View>

      {/* Brand & Rating */}
      <View style={styles.infoContainer}>
        <Text style={styles.brand}>{brand}</Text>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={14} color="gold" />
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          <Text style={styles.reviews}>({reviews})</Text>
        </View>
      </View>

      {/* Product Title */}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {/* Prices */}
      <View style={styles.priceContainer}>
        <Text style={styles.currentPrice}>KES {price.toFixed(2)}</Text>
        {oldPrice && (
          <Text style={styles.oldPrice}>KES {oldPrice.toFixed(2)}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: widthPercentageToDP(46),
    backgroundColor: "#1b1b1b",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3b3b3b",
    elevation: 3,
    marginBottom: heightPercentageToDP(2),
  },
  imageContainer: {
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: heightPercentageToDP(30),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3b3b3b",
  },
  likeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255,255,255,0.5)",
    padding: 5,
    borderRadius: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  brand: {
    fontSize: 12,
    color: "#d3d3d3",
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 12,
    marginLeft: 3,
    fontWeight: "bold",
    color: "#d3d3d3",
  },
  reviews: {
    fontSize: 12,
    color: "#d3d3d3",
    marginLeft: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c0e57b",
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#d3d3d3",
    marginLeft: 5,
  },
});

export default ProductCard;
