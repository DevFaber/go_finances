import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'

import { Register } from './src/screens/Register'
import theme from './src/global/Styles/theme'



export default function App() {
  const [isLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    showSplashScreen();
  }, []);

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    if (isLoaded) hideSplashScreen();
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}