import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Button3Screen = () => {
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
        source={require('../assets/testwater.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.bluetoothMarker} />
      <View style={styles.instructionsMarker} />
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
  bluetoothMarker: {
    position: 'absolute',
    top: '35%',
    left: '12%',
    width: 260,
    height: 96,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    zIndex: 2,
  },
  instructionsMarker: {
    position: 'absolute',
    top: '50%',
    left: '12%',
    width: 260,
    height: 60,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    zIndex: 2,
  }
});

export default Button3Screen; 