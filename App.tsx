import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import NativeRoute from './NativeRoute';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Splash from './Splash';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = React.useState<boolean>(true);
  SplashScreen.preventAutoHideAsync();
  // load font
  const [fontsLoaded] = useFonts({
    SpfRegularText: require('./assets/font/SF-Pro-Text-Regular.otf'),
    SpfBoldText: require('./assets/font/SF-Pro-Text-Bold.otf'),
    SpfSemiBoldText: require('./assets/font/SF-Pro-Text-Semibold.otf'),
    SpfMediumText: require('./assets/font/SF-Pro-Text-Medium.otf'),
    SpfLightText: require('./assets/font/SF-Pro-Text-Light.otf'),
    InterRegularText: require('./assets/font/Inter-Regular.otf'),
    InterBoldText: require('./assets/font/Inter-Bold.otf'),
    InterSemiBoldText: require('./assets/font/Inter-SemiBold.otf'),
    InterMediumText: require('./assets/font/Inter-Medium.otf'),
    InterLightText: require('./assets/font/Inter-Light-BETA.otf'),


  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null; 
  }



  if (isSplashVisible) {
    return <Splash onFinish={() => setIsSplashVisible(false)} />;
  }
  return (
    <Provider store={store}>
     <NativeRoute />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
