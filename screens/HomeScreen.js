import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchVideos = async () => {
    let apiURL = `https://api.dailymotion.com/user/x1audmk/videos?limit=20`;
    console.log(`API URL : ${apiURL}`);
    await fetch(apiURL)
      .then((response) => {
        console.log(`Response status:${response.status}`);
        if (response.ok) {
          console.log(`Response okay from Server ${JSON.stringify(response)}`);
          return response.json();
        } else {
          console.log(`Unsuccessful Response from server : ${response.status}`);
        }
      })
      .then((jsonData) => {
        console.log(`Objects received : ${jsonData.list.length}`);
        setVideos(jsonData.list);
      })
      .catch((error) => {
        console.log(`Error while connecting to API : ${JSON.stringify(error)}`);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(`${item.title} selected`);
        navigation.navigate("Detail", { id: item.id });
      }}
    >
      <View style={styles.listItem}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.buttonText}>View Favorites</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator size="large" animating={true} />
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={renderVideoItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 20,
  },
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  separator: {
    height: 5,
  },
  button: {
    backgroundColor: "#523a70",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "50%",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
