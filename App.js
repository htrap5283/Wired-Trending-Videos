import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const headerOptions = (title) => ({
    headerTitle: title,
    headerStyle: { backgroundColor: "#523a70" },
    headerTintColor: "white",
    headerTitleAlign: "center",
    headerTitleStyle: { fontWeight: "bold" },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerOptions("Home Screen")}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={headerOptions("Detail Screen")}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={headerOptions("Favorites Screen")}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
