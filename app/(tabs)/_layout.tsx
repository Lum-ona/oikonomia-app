import React from "react";
import { Tabs } from "expo-router";
import Icon from "@/assets/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/constants/theme";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TabsLayout: React.FC = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const screenOptions: BottomTabNavigationOptions = {
    tabBarStyle: {
      backgroundColor: theme.colors.background,
      borderTopWidth: 0,
      paddingTop: hp(1),
    },
    tabBarActiveTintColor: theme.colors.textDark,
    tabBarInactiveTintColor: theme.colors.textLight,
  };

  return (
    <Tabs screenOptions={screenOptions}>
      {[
        { name: "home", icon: "home" },
        { name: "talents", icon: "people-arrows" },
      ].map(({ name, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: "",
            tabBarIcon: ({ color, size }) => (
              <>
                {name === "home" && (
                  <Icon name={icon} size={size} color={color} />
                )}
                {name == "talents" && (
                  <FontAwesome6 name={icon} size={size} color={color} />
                )}
              </>
            ),
            headerShown: false,
            // tabBarStyle: { display: "none" },
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
