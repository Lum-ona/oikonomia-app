import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

interface UserTalentCardProps {
  name: string;
  image: string;
  id: string | number;
  profession: string;
  years: string | number;
  age: string | number;
}

const UserTalentCard: React.FC<UserTalentCardProps> = ({
  name,
  image,
  id,
  profession,
  years,
  age,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/(stack)/resume/${id}`)}
    >
      {/* Gradient Overlay */}
      <LinearGradient
        colors={["#0000001d", "#000000ec"]}
        style={styles.overlay}
      />

      {/* Background Image */}
      <Image source={{ uri: image }} style={StyleSheet.absoluteFillObject} />

      {/* User Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age} years old</Text>
      </View>

      {/* Profession & Experience */}
      <View style={styles.professionContainer}>
        <Text style={styles.profession}>{profession},</Text>
        <Text style={styles.experience}>{years} years of experience</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserTalentCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: "100%",
    height: hp(50),
    marginBottom: hp(2),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#888",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  detailsContainer: {
    paddingHorizontal: 10,
    zIndex: 2,
  },
  name: {
    color: "#f3f3f3",
    fontSize: 20,
    fontWeight: "700",
  },
  age: {
    color: "#aaa",
  },
  professionContainer: {
    marginVertical: hp(2),
    paddingHorizontal: 10,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  profession: {
    color: "#f3f3f3",
    fontWeight: "600",
    fontSize: 16,
  },
  experience: {
    color: "#d3d3d3",
    marginLeft: 5,
  },
});
