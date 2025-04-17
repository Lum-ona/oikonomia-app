import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

interface UserTalentProfileCardProps {
  name: string;
  image: string;
  id: string;
}

const UserTalentProfileCard: React.FC<UserTalentProfileCardProps> = ({
  name,
  image,
  id,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text
        style={{
          color: "#d3d3d3",
          fontSize: 12,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default UserTalentProfileCard;

const styles = StyleSheet.create({
  container: { marginBottom: heightPercentageToDP(2) },
  image: {
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(10),
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#777",
  },
});
