import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Router, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import BackButton from "./BackButton";

interface HeaderProps {
  router: Router;
}

const Header: React.FC<HeaderProps> = ({ router }) => {
  const pathname = usePathname();

  // Function to determine header title
  const getHeaderTitle = () => {
    if (pathname === "/talents") return "TAALLent";
    if (pathname.split("/").includes("resume")) return "Resume";
    return null;
  };

  return (
    <View style={styles.header}>
      {/* Show BackButton if not on home, otherwise show logo */}
      {pathname !== "/home" ? (
        <BackButton />
      ) : (
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      )}

      {/* Render title dynamically based on pathname */}
      {getHeaderTitle() && <Text style={styles.title}>{getHeaderTitle()}</Text>}

      {/* Show icons only on home screen */}
      {pathname === "/home" && (
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => router.push("/notifications")}>
            <Ionicons name="notifications-outline" size={24} color="#f3f3f3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/profile")}>
            <Ionicons name="person-outline" size={24} color="#f3f3f3" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    marginBottom: hp(3),
    paddingVertical: hp(1),
    height: heightPercentageToDP(9),
  },
  logo: {
    // width: "auto",
    width: heightPercentageToDP(14),
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  title: {
    color: "#f3f3f3",
    fontSize: 18,
    fontWeight: "600",
  },
});
