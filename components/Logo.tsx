import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PRIMARY_BLUE, LIGHT_BLUE, TEAL } from '@/constants/Colors';

type LogoProps = {
  size?: number;
  showText?: boolean;
  textColor?: string;
};

export const Logo: React.FC<LogoProps> = ({ 
  size = 100, 
  showText = true, 
  textColor = PRIMARY_BLUE
}) => {
  const scale = size / 100; // Base size is 100, scale everything from there
  
  return (
    <View style={styles.container}>
      <View style={[styles.logoCircle, { width: size, height: size, borderColor: PRIMARY_BLUE }]}>
        <Text style={[styles.logoIcon, { fontSize: 48 * scale, color: PRIMARY_BLUE }]}>V</Text>
        <View style={[styles.locationPin, { right: 15 * scale, bottom: 20 * scale }]}>
          <View style={[styles.pin, { borderColor: LIGHT_BLUE, backgroundColor: TEAL }]} />
        </View>
        <View style={[styles.car, { left: 18 * scale, bottom: 15 * scale }]}>
          <View style={[styles.carBody, { backgroundColor: LIGHT_BLUE }]} />
        </View>
      </View>

      {showText && (
        <Text style={[styles.logoText, { color: textColor, fontSize: 20 * scale }]}>
          Vaga Rápida
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'white',
  },
  logoIcon: {
    fontWeight: 'bold',
  },
  logoText: {
    fontWeight: 'bold',
    marginTop: 10,
    letterSpacing: 1,
  },
  locationPin: {
    position: 'absolute',
    width: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pin: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  car: {
    position: 'absolute',
    width: 25,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carBody: {
    width: 25,
    height: 12,
    borderRadius: 5,
  }
});

export default Logo; 