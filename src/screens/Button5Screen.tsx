import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation param list type
type RootStackParamList = {
  Home: undefined;
  Button1: undefined;
  Button2: undefined;
  Button3: undefined;
  Button4: undefined;
  Button5: undefined;
  WhatIsCCS: undefined;
  DangersOfCCS: undefined;
  VoicesOnCCS: undefined;
  CCSBenefits: undefined;
  Instruct4: undefined;
};

// Define the navigation prop type
type NavigationProp = StackNavigationProp<RootStackParamList>;

const Button5Screen = () => {
  const navigation = useNavigation<NavigationProp>();

  const openGoogleForm = () => {
    Linking.openURL('https://forms.gle/GTpw8KKAoTyNNFfa7');
  };

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
        source={require('../assets/questions.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.bottomArrowButton}
        onPress={openGoogleForm}>
      </TouchableOpacity>
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
    fontSize: 120,
  },
  bottomArrowButton: {
    position: 'absolute',
    bottom: '20%',
    right: '12.5%',
    width: '65%',
    height: 140,
    zIndex: 1,
    backgroundColor: 'transparent',
  }
});

export default Button5Screen; 