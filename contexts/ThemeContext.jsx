import React, { createContext, useState, useContext, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isThemeLoading, setIsThemeLoading] = useState(true);

  useEffect(() => {
    const getStoredTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme");
        if (storedTheme) {
          setIsDarkMode(storedTheme === "dark");
        }
      } catch (error) {
        console.error("Failed to load theme preference", error);
      } finally {
        setIsThemeLoading(false); // Set loading to false after theme is determined
      }
    };

    getStoredTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);

    try {
      await AsyncStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Failed to save theme preference", error);
    }
  };

  if (isThemeLoading) {
    return null; // Wait until theme preference is determined
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isThemeLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error("useTheme is called outside of ThemeProvider");
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
