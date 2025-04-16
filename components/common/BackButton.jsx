import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "../../assets/icons";
import { useTheme } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../constants/theme";
import { usePathname } from "expo-router";

const BackButton = ({ size = 26, router }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const pathname = usePathname();
  const [lastPage, setLastPage] = useState("/talents");

  useEffect(() => {
    if (pathname !== "/resume/[id]") {
      setLastPage(pathname);
    }
  }, [pathname]);
  return (
    <Pressable
      onPress={() => {
        if (router.canGoBack()) {
          router.back();
        } else {
          router.replace("/talents"); // Replace instead of push
        }
      }}
      style={[
        styles.button,
        {
          borderRadius: theme.radius.sm,
          backgroundColor: theme.colors.backgroundLight,
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
  },
});
