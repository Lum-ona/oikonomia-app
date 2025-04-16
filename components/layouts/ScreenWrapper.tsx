import React from "react";
import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/constants/theme";

interface ScreenWrapperProps {
  children: React.ReactNode;
  bg?: string; // bg is an optional string
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, bg }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Set default background color to the theme's background color if `bg` is not provided
  const backgroundColor = bg || theme.colors.backgroundDarkest;

  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30; //padding in all devices

  return (
    <View
      style={
        {
          flex: 1,
          paddingTop,
          backgroundColor,
          paddingHorizontal: 10,
        } as ViewStyle
      } // Type assertion for ViewStyle
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
