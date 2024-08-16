import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SendNotificationsScreen from "./screens/SendNotificationsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SendNotifications"
          component={SendNotificationsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
