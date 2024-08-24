import React, { useEffect, useRef } from 'react';
import { View, Animated,  StyleSheet, Dimensions, Easing } from 'react-native';
import { primaryColor } from './Style/styles';

const Splash = ({ onFinish }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;
  const translateYValue = useRef(new Animated.Value(0)).current;
  const backgroundColorValue = useRef(new Animated.Value(0)).current; 


  const targetScale = 3;

  useEffect(() => {
    // Zooming animation
    const startZooming = () => {
      Animated.timing(scaleValue, {
        toValue: targetScale,
        duration: 3000, // 3 seconds for zooming
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        startFadingAndSwiping(); // Start fading and swiping after zoom is complete
      });
    };

    // Fading, swiping, and background color animation
    const startFadingAndSwiping = () => {
      Animated.parallel([
        // Fade out animation
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // Swipe up animation
        Animated.timing(translateYValue, {
          toValue: -30,
          duration: 2000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        // Background color animation
        Animated.timing(backgroundColorValue, {
          toValue: 1, 
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false, 
        }),
      ]).start(() => {
        if (onFinish) onFinish();
      });
    };

    startZooming();
  }, [scaleValue, opacityValue, translateYValue, backgroundColorValue, onFinish]);

  // Interpolating background color from white to blue
  const backgroundColor = backgroundColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffffff', primaryColor], 
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.Image
        source={require('./assets/image/splashlogo.png')}
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleValue }, { translateY: translateYValue }], 
            opacity: opacityValue,
          },
        ]}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.1,
    height: height * 0.1,
  },
});

export default Splash;
