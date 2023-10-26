import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react'; 

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'; 
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";


export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />   
      </ThemeProvider>
    </>
  );
}

