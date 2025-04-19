import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY_BLUE, LIGHT_BLUE, WHITE } from '@/constants/Colors';
import Logo from '@/components/Logo';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();
  const logoSize = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const backgroundCircle = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    // Start animations
    Animated.sequence([
      // Grow background circle
      Animated.timing(backgroundCircle, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
      }),
      
      // Fade in and grow logo
      Animated.parallel([
        Animated.spring(logoSize, {
          toValue: 1,
          tension: 10,
          friction: 3,
          useNativeDriver: false,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        })
      ]),
      
      // Fade in tagline text
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        delay: 200,
        useNativeDriver: false,
      }),
      
      // Wait a bit before navigating
      Animated.delay(1200),
    ]).start(() => {
      // Navigate to login page after animation completes
      router.replace('/auth/login');
    });
  }, []);

  // Calculate circle size based on animation value
  const circleSize = backgroundCircle.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.max(width, height) * 2],
  });

  // Calculate logo size based on animation value
  const animatedLogoSize = logoSize.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 150],
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Animated background circle */}
      <Animated.View 
        style={[
          styles.backgroundCircle,
          {
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize,
            opacity: backgroundCircle,
          }
        ]} 
      />
      
      {/* Animated logo */}
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [
              { scale: logoSize }
            ]
          }
        ]}
      >
        <Logo size={150} />
      </Animated.View>
      
      {/* Animated tagline */}
      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.tagline}>Encontre estacionamentos em tempo real</Text>
      </Animated.View>
      
      {/* Version number */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Versão 1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundCircle: {
    backgroundColor: LIGHT_BLUE,
    position: 'absolute',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  tagline: {
    color: WHITE,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  versionContainer: {
    position: 'absolute',
    bottom: 40,
  },
  versionText: {
    color: WHITE,
    opacity: 0.7,
    fontSize: 12,
  }
}); 