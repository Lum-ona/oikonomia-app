import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

const data = [
  {
    id: "1",
    text: "Weekend Vibes",
    image:
      "https://images.pexels.com/photos/6193638/pexels-photo-6193638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    text: "Chill Mode",
    image:
      "https://images.pexels.com/photos/6192164/pexels-photo-6192164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    text: "Cozy Days",
    image:
      "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0); // <-- NEW: Ref to avoid frequent re-renders
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    if (index !== activeIndexRef.current) {
      activeIndexRef.current = index;
      setActiveIndex(index); // Triggers re-render only when index actually changes
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        onScroll={handleScroll}
        scrollEventThrottle={16} // <- Optional, but useful for performance
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.text}>{item.text}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeIndex === index
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#1a1a1a",
    marginBottom: heightPercentageToDP(2),
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    top: "10%",
    left: "10%",
    fontSize: 32,
    fontWeight: "bold",
    color: "#c0e57b",
  },
  image: {
    width: width,
    height: width * 0.5,
    borderRadius: 20,
    resizeMode: "cover",
  },
  indicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  indicator: {
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 20,
    backgroundColor: "white",
  },
  inactiveIndicator: {
    width: 10,
    backgroundColor: "gray",
  },
});
