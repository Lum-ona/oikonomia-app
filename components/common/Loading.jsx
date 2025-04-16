import { ActivityIndicator, View } from "react-native";
import React from "react";
import { darkTheme } from "../../constants/theme"; // Import themes

const Loading = ({ size = "large" }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={darkTheme.colors.primary} />
    </View>
  );
};

export default Loading;
