import React, { useEffect, useState } from "react";
import { useRootNavigationState, useRouter } from "expo-router";
import { Slot } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext"; // Import custom ThemeProvider
import Loading from "@/components/common/Loading";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/configs/firebase";
import { ThemeProvider as PaperProvider } from "react-native-paper"; // Import PaperProvider from react-native-paper
import { lightTheme, darkTheme } from "@/constants/theme"; // Import themes
import { useTheme } from "@/contexts/ThemeContext"; // Import the useTheme hook
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar"; // Import StatusBar from expo-status-bar
import * as NavigationBar from "expo-navigation-bar";

type RootNavigationState = {
  stale: boolean;
  routes: Array<any>;
};

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null); // Firebase User type
  const router = useRouter();
  const rootNavigationState = useRootNavigationState() as RootNavigationState; // Root navigation state

  useEffect(() => {
    // Set the navigation bar background color to black
    NavigationBar.setBackgroundColorAsync("#000000");

    // Ensure the icons are light to be visible on a dark background
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  // Effect to handle authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Effect to navigate once root navigation state is available and not stale
  useEffect(() => {
    if (
      !isLoading &&
      !rootNavigationState.stale &&
      rootNavigationState.routes.length > 0
    ) {
      // console.log("navigation state: ", rootNavigationState);
      if (user !== null) {
        router.push("/(tabs)/home");
      } else {
        console.log("no user");
        router.push("/(tabs)/home");
        // router.push("/(auth)/registration");
      }
    }
  }, [router, user, rootNavigationState.stale, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <ThemeWrapper />
      </ThemeProvider>
    </AuthProvider>
  );
};

// A wrapper component that uses the theme context
const ThemeWrapper: React.FC = () => {
  const { isDarkMode, isThemeLoading } = useTheme(); // Access the current theme

  // Early return if theme context is still loading
  if (isThemeLoading) return <Loading />; // Wait until the theme is initialized

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <StatusBar
            style={isDarkMode ? "light" : "dark"} // Set status bar style (light or dark content)
            backgroundColor={isDarkMode ? "#000000" : "#ffffff"} // Set background color for the status bar
          />
          <Slot />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default Layout;
