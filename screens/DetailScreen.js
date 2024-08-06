import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../config/FirebaseConfig";

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [videoDetails, setVideoDetails] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchVideoDetails = async () => {
    let apiURL = `https://api.dailymotion.com/video/${id}?fields=thumbnail_240_url,description,views_total,title,created_time`;
    console.log(`ID selected ${id} `);
    console.log(`Now the API URL for selected ID would be  : ${apiURL}`);

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
        console.log(`Video details received : ${JSON.stringify(jsonData)}`);
        setVideoDetails(jsonData);
      })
      .catch((error) => {
        console.log(`Error while connecting to API : ${JSON.stringify(error)}`);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const addToFavorites = async () => {
    const videoToInsert = {
      id: id,
      title: videoDetails.title,
    };

    try {
      const collectionRef = collection(db, "Favorites");

      const docRef = await addDoc(collectionRef, videoToInsert);
      console.log(`Document added successfully ${JSON.stringify(docRef)}`);
      console.log(`Document inserted with the id : ${docRef.id}`);
      alert("Added to favorites");
      navigation.goBack();
    } catch (err) {
      console.log(`Error while inserting Favorite in the database : ${err}`);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" animating={true} />
        ) : (
          <>
            <Image
              source={{ uri: videoDetails.thumbnail_240_url }}
              style={styles.image}
            />
            <Text style={styles.title}>{videoDetails.title}</Text>
            <Text style={styles.description}>{videoDetails.description}</Text>
            <Text style={styles.details}>
              {" "}
              Views : {videoDetails.views_total}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={addToFavorites}>
                <Text style={styles.buttonText}>Add to Favorites</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    padding: 20,
    paddingBottom: 40,
  },
  image: {
    width: "200",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",

    color: "#333",
    marginVertical: 10,
    textAlign: "auto",
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 24,
    marginVertical: 10,
    textAlign: "justify",
    fontStyle: "italic",
  },
  details: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444",
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    paddingBottom: 20,
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
