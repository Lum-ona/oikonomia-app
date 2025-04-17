import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserTalentCard from "./UserTalentCard";
import { heightPercentageToDP } from "react-native-responsive-screen";

const UsersTalentsCards = () => {
  const data = [
    {
      id: "1",
      text: "Engineers",
      image:
        "https://images.pexels.com/photos/6193638/pexels-photo-6193638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "2",
      text: "Medical Doctors",
      image:
        "https://images.pexels.com/photos/6192164/pexels-photo-6192164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "3",
      text: "Nurses",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "4",
      text: "Web Developers",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "5",
      text: "Insuarance",
      image:
        "https://images.pexels.com/photos/6193638/pexels-photo-6193638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "6",
      text: "Tax",
      image:
        "https://images.pexels.com/photos/6192164/pexels-photo-6192164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "7",
      text: "Architects",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      age: 24,
      profession: "Architect",
      years: 5,
    },

    {
      id: "8",
      text: "Mechanics",
      image:
        "https://images.pexels.com/photos/6193638/pexels-photo-6193638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "9",
      text: "Saloonists",
      image:
        "https://images.pexels.com/photos/6192164/pexels-photo-6192164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      age: 24,
      profession: "Architect",
      years: 5,
    },
    {
      id: "10",
      text: "Barbers",
      image:
        "https://images.pexels.com/photos/6192039/pexels-photo-6192039.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      age: 24,
      profession: "Architect",
      years: 5,
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <UserTalentCard
          name={item.text}
          image={item.image}
          id={item.id}
          profession={item.profession}
          years={item.years}
          age={item.age}
        />
      )}
      keyExtractor={(item) => item.id}
      nestedScrollEnabled={true}
      style={{ marginTop: heightPercentageToDP(1) }}
      ListHeaderComponent={
        <Text
          style={{
            color: "#f3f3f3",
            marginBottom: heightPercentageToDP(2),
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          All Talented Fellows
        </Text>
      }
    />
  );
};

export default UsersTalentsCards;

const styles = StyleSheet.create({});
