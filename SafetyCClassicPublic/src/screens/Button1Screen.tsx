import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Button1Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity 
          style={[styles.backButton, { top: -40 }]}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <Image
        source={require('../assets/Homepage1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.whatIsCCSButton}
        onPress={() => navigation.navigate('WhatIsCCS')}
      />
      <TouchableOpacity
        style={styles.benefitsButton}
        onPress={() => navigation.navigate('CCSBenefits')}
      />
      <TouchableOpacity
        style={styles.button3}
        onPress={() => navigation.navigate('DangersOfCCS')}
      />
      <TouchableOpacity
        style={styles.button4}
        onPress={() => navigation.navigate('VoicesOnCCS')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  safeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 1,
  },
  backArrow: {
    color: '#000',
    fontSize: 90,
  },
  whatIsCCSButton: {
    position: 'absolute',
    top: '23%',
    left: '10%',
    width: '35%',
    height: 220,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  benefitsButton: {
    position: 'absolute',
    top: '23%',
    right: '10%',
    width: '35%',
    height: 220,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  button3: {
    position: 'absolute',
    bottom: '18%',
    left: '10%',
    width: '35%',
    height: 220,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  button4: {
    position: 'absolute',
    bottom: '18%',
    right: '10%',
    width: '35%',
    height: 220,
    zIndex: 1,
    backgroundColor: 'transparent',
  }
});

export default Button1Screen; 