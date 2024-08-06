import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { useFocusEffect } from "@react-navigation/native";
import { db } from "../config/FirebaseConfig";

const FavoriteScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const collectionRef = collection(db, "Favorites");

      const querySnapshot = await getDocs(collectionRef);

      const resultsFromDB = [];

      querySnapshot.forEach((eachDoc) => {
        console.log(`eachDoc : ${JSON.stringify(eachDoc)}`);

        const fav = {
          id: eachDoc.id,
          ...eachDoc.data(),
        };

        console.log(`fav : ${JSON.stringify(fav)}`);
        resultsFromDB.push(fav);
      });

      setFavorites(resultsFromDB);
    } catch (error) {
      console.log(`Error while fetching favorites: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchFavorites();
    }, [])
  );

  const clearFavorites = async () => {
    try {
      const collectionRef = collection(db, "Favorites");
      const querySnapshot = await getDocs(collectionRef);

      for (const doc of querySnapshot.docs) {
        await deleteDoc(doc.ref);
      }
      console.log("All documents deleted successfully");
      setFavorites([]);
      alert("Favorites cleared");
    } catch (error) {
      console.log(`DEBUG --- Error while clearing favorites: ${err}`);
    }
  };

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { id: item.id })}
    >
      <View style={styles.listItem}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" animating={true} />
      ) : (
        <>
          {favorites.length === 0 ? (
            <Text style={styles.noFavoritesText}> No Favorites Found</Text>
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={(item) => item.id}
              renderItem={renderFavoriteItem}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          )}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                favorites.length === 0 && styles.buttonDisabled,
              ]}
              onPress={clearFavorites}
              disabled={favorites.length === 0}
            >
              <Text style={styles.buttonText}>Clear Favorites</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default FavoriteScreen;

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
  noFavoritesText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#523a70",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "#999",
  },
  icon: {
    marginRight: 10,
  },
});
