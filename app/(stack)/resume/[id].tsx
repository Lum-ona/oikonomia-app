import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Link, useRouter } from "expo-router";
import ScreenWrapper from "@/components/layouts/ScreenWrapper";
import Header from "@/components/common/Header";

const profileData = {
  name: "ROBERT D.",
  location: "Nairobi, Kenya",
  imageUrl:
    "https://images.pexels.com/photos/26885613/pexels-photo-26885613/free-photo-of-portrait-of-an-african-man-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=1200",
  skills: [
    "UI Design",
    "UX Design",
    "Graphic Design",
    "Web Design",
    "Android",
    "iOS",
  ],
  domain: "Design & Multimedia",
  experience: [
    {
      role: "UX, UI Designer",
      company: "ACME Inc.",
      duration: "2009 to PRESENT",
    },
    { role: "UX Designer", company: "ION5 Inc.", duration: "2006 to 2009" },
    {
      role: "Design Intern",
      company: "Simply9 Inc.",
      duration: "2005 to 2006",
    },
  ],
  portfolioImages: [
    "https://images.pexels.com/photos/342943/pexels-photo-342943.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/346549/pexels-photo-346549.png?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/29483247/pexels-photo-29483247/free-photo-of-stack-of-gold-bars-on-rustic-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    "https://images.pexels.com/photos/7947707/pexels-photo-7947707.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
};

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <>
      <ScreenWrapper>
        <Header router={router} />
        <ScrollView contentContainerStyle={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <Image
              source={{ uri: profileData.imageUrl }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.name}>{profileData.name}</Text>
              <Text style={styles.location}>{profileData.location}</Text>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <Text style={styles.text}>{profileData.skills.join(", ")}</Text>
          </View>

          {/* Domain */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>DOMAIN</Text>
            <Text style={styles.text}>{profileData.domain}</Text>
          </View>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            {profileData.experience.map((exp, index) => (
              <Text key={index} style={styles.text}>
                {exp.role} at {exp.company} - {exp.duration}
              </Text>
            ))}
          </View>

          {/* Portfolio */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PORTFOLIO</Text>
            <Text style={styles.text}>
              Take a look at a few samples of my web and mobile work.
            </Text>
            <FlatList
              data={profileData.portfolioImages}
              renderItem={({ item }) => (
                <Link href={item}>
                  <Image source={{ uri: item }} style={styles.portfolioImage} />
                </Link>
              )}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              columnWrapperStyle={styles.row}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#fff",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
  },
  location: {
    fontSize: 14,
    color: "#BBB",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#CCC",
  },
  row: {
    justifyContent: "space-between",
    marginTop: 10,
  },
  portfolioImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
});
