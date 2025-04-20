import { Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Icon from "../../assets/icons";
import { useTheme } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../constants/theme";
import { usePathname, useRouter } from "expo-router";

const BackButton = ({ size = 26 }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const router = useRouter();
  // const pathname = usePathname();

  // useEffect(() => {}, [pathname]);

  return (
    <Pressable
      onPress={() => {
        if (router.canGoBack()) {
          router.back();
        } else {
          router.replace("/talents");
        }
      }}
      style={[
        styles.button,
        {
          borderRadius: theme.radius.sm,
        },
      ]}
    >
      <Icon name="arrowLeft" strokeWidth={2.5} size={size} color={"white"} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
});
