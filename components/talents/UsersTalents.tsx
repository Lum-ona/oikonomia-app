import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import UserTalentProfileCard from "./UserTalentProfileCard";
import { TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

type TalentItem = {
  id: string;
  text: string;
  image: string;
};

type MoreItem = {
  id: string;
  isMore: true;
};

type UserTalentItem = TalentItem | MoreItem;

const UsersTalents = () => {
  const data = [
    {
      id: "1",
      text: "Engineers",
      image:
        "https://images.pexels.com/photos/6193638/pexels-photo-6193638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "2",
      text: "Medical Doctors",
      image:
        "https://images.pexels.com/photos/6192164/pexels-photo-6192164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "3",
      text: "Nurses",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: "4",
      text: "Web Developers",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: "5",
      text: "Insuarance",
      image:
        "https://images.pexels.com/photos/6193638/pexels-photo-6193638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "6",
      text: "Tax",
      image:
        "https://images.pexels.com/photos/6192164/pexels-photo-6192164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "7",
      text: "Architects",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },

    {
      id: "8",
      text: "Mechanics",
      image:
        "https://images.pexels.com/photos/6193638/pexels-photo-6193638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "9",
      text: "Saloonists",
      image:
        "https://images.pexels.com/photos/6192164/pexels-photo-6192164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "10",
      text: "Barbers",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: "11",
      text: "Dancers",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: "12",
      text: "Actors",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
  ];
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle between limited view and full view
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const maxVisibleItems = 8;
  const displayedData: UserTalentItem[] = isExpanded
    ? [...data, { id: "more", isMore: true }]
    : [...data.slice(0, maxVisibleItems - 1), { id: "more", isMore: true }];

  return (
    <FlatList
      data={displayedData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        if ("isMore" in item) {
          return (
            <TouchableOpacity
              style={styles.moreContainer}
              onPress={toggleExpand}
            >
              {!isExpanded && (
                <Text style={styles.moreText}>
                  {data.length - maxVisibleItems}+
                </Text>
              )}
              <Text style={styles.moreLabel}>
                {isExpanded ? "Show Less" : "More"}
              </Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <UserTalentProfileCard
              name={item.text}
              id={item.id}
              image={item.image}
            />
          );
        }
      }}
      numColumns={4}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      nestedScrollEnabled={true}
      style={{ marginBottom: heightPercentageToDP(2) }}
    />
  );
};

export default UsersTalents;

const styles = StyleSheet.create({
  moreContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(10),
    borderRadius: 10,
    backgroundColor: "#444", // Dark background for the 'More' box
  },
  moreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  moreLabel: {
    fontSize: 12,
    color: "#d3d3d3",
    marginTop: 2,
  },
});
