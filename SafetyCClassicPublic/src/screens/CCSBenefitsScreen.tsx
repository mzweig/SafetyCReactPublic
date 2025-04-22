import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CCSBenefitsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity 
          style={[styles.backButton, { top: -40 }]}
          onPress={() => navigation.navigate('Button1')}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <Image
        source={require('../assets/ccsbenefits.png')}
        style={styles.image}
        resizeMode="contain"
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
  }
});

export default CCSBenefitsScreen; 