import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react'; 
import * as Font from 'expo-font';
import {  useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { ThemeProvider } from "styled-components/native";

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'; 
import { theme } from "./src/infrastructure/theme";


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
        <RestaurantsScreen />   
      </ThemeProvider>
    </>
  );
}

