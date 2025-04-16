import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";

const SearchHeader: React.FC = ({ placeholder }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="search-outline" size={24} color="#d3d3d3" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1b1b1b",
    padding: 10,
    borderRadius: 10,
    borderColor: "#777",
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: heightPercentageToDP(2),
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#000",
  },
});

export default SearchHeader;
