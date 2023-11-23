import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react'; 
import * as Font from 'expo-font';
import { View, Text } from 'react-native'; 
import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';
import { locationContextProvider } from './src/services/location/locaiton.context'; 
import { ThemeProvider } from "styled-components/native";

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'; 
import { theme } from "./src/infrastructure/theme";



function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map Screen !</Text>
    </View>
  );
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  
  const [oswaldLoader] = useOswald({
    Oswald_400Regular
  }); 

  const [latoLoader] = useLato({
    Lato_400Regular
  }); 

  if (!oswaldLoader || !latoLoader) {
    return null; 
  }

  return (
    <>
      <ExpoStatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <locationContextProvider>
        <RestaurantContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Map') {
                  iconName = focused ? 'map' : 'map-outline';
                } else if (route.name === 'Restaurants') {
                  iconName = focused ? 'restaurant' : 'restaurant-outline'
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
            
          >

            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        </RestaurantContextProvider>
        </locationContextProvider>
      </ThemeProvider>
    </>
  );
}

