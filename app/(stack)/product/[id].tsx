import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ImageCarousel from "../../../components/vendors/Carousel";

const ProductCard: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("S");

  const colors = ["#0A0A0A", "#1E88E5", "#B3E5FC"];
  const sizes = ["XS", "S", "M"];

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <ImageCarousel />

      <View style={styles.container}>
        {/* Store and Rating */}
        <View style={styles.header}>
          <Text style={styles.store}>H&M</Text>
          <Text style={styles.rating}>⭐ 4.9 (136)</Text>
        </View>

        {/* Product Title */}
        <Text style={styles.title}>Oversized Fit Printed Mesh T-Shirt</Text>

        {/* Price Section */}
        <View style={styles.priceContainer}>
          <Text style={styles.discountPrice}>$295.00</Text>
          <Text style={styles.originalPrice}>$550.00</Text>
        </View>

        {/* Product Description */}
        <Text style={styles.description}>
          Elevate your casual wardrobe with our Loose Fit Printed T-shirt.
          Crafted from premium cotton for maximum comfort, this relaxed-fit tee
          features.
        </Text>

        {/* Color Selection */}
        <Text style={styles.sectionTitle}>Colors</Text>
        <View style={styles.colorContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorCircle,
                { backgroundColor: color },
                selectedColor === color && styles.selectedColor,
              ]}
              onPress={() => setSelectedColor(color)}
            >
              {selectedColor === color && <View style={styles.innerCircle} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Size Selection */}
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sizeBox,
                selectedSize === size && styles.selectedSizeBox,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>🛒 ADD TO CART</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowButtonText}>BUY NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  store: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d3d3d3",
  },
  rating: {
    fontSize: 14,
    color: "#FFA500",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#fff",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#c0e57b",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  description: {
    fontSize: 14,
    color: "#d3d3d3",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#f3f3f3",
  },
  colorContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#aaa",
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#fff",
  },
  sizeContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  sizeBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  selectedSizeBox: {
    backgroundColor: "#000",
  },
  sizeText: {
    fontSize: 14,
    color: "#ccc",
  },
  selectedSizeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  cartButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    alignItems: "center",
    marginRight: 8,
  },
  cartButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#aaa",
  },
  buyNowButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});
