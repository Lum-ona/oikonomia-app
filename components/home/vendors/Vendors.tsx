import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import VendorsCard from "./VendorsCard";

interface Vendor {
  id: string;
  name: string;
  image: string;
}

const vendorsData: Vendor[] = [
  {
    id: "1",
    name: "Roxz",
    image:
      "https://images.pexels.com/photos/6878691/pexels-photo-6878691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    name: "Wades",
    image:
      "https://images.pexels.com/photos/11276496/pexels-photo-11276496.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "3",
    name: "Ronald",
    image:
      "https://images.pexels.com/photos/18068530/pexels-photo-18068530/free-photo-of-man-in-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    id: "4",
    name: "Cody",
    image:
      "https://images.pexels.com/photos/8043851/pexels-photo-8043851.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const Vendors: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Reign City <Text style={styles.subtitle}>Vendors</Text>
      </Text>
      <FlatList
        data={vendorsData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <VendorsCard vendor={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 10,
    marginBottom: heightPercentageToDP(2),
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: heightPercentageToDP(2),
  },
  subtitle: {
    color: "#aaa",
  },
  card: {
    backgroundColor: "#222",
    borderRadius: 15,
    // marginRight: 10,
    paddingBottom: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 15,
  },
  name: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: -10,
    fontWeight: "bold",
  },
});

export default Vendors;
