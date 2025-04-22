import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WhatIsCCSScreen = () => {
  const navigation = useNavigation();
  
  const openYouTubeVideo = () => {
    Linking.openURL('https://www.youtube.com/watch?v=POu99sP9ojM');
  };
  
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
        source={require('../assets/whatisccs.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.youtubeButton}
        onPress={openYouTubeVideo}
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
    color: '#fff',
    fontSize: 90,
  },
  youtubeButton: {
    position: 'absolute',
    bottom: '7%',
    right: '10%',
    width: '25%',
    height: 90,
    zIndex: 1,
    backgroundColor: 'transparent',
  }
});

export default WhatIsCCSScreen; 