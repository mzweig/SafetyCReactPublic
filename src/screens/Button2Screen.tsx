import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Button2Screen = () => {
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
        source={require('../assets/lakedata.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.dateOverlay}>
        <Text style={styles.dateText}>4/28/25</Text>
      </View>
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
  dateOverlay: {
    position: 'absolute',
    top: '19%',
    left: '35%',
    backgroundColor: '#749EB5',
    padding: 5,
    borderRadius: 3,
    zIndex: 1,
  },
  dateText: {
    color: '#F5F5F5',
    fontSize: 24,
    fontWeight: '500',
  }
});

export default Button2Screen; 