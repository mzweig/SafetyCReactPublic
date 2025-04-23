import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Dimensions, Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<ReactNavigation.RootParamList>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Instruct1Screen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/instruct1.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      >
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity
            style={[styles.backButton, { top: -40 }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate('Instruct2')}
          activeOpacity={0.7}
        >
          <Image 
            source={require('../assets/nextpage.png')}
            style={styles.nextButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
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
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    zIndex: 999,
    backgroundColor: 'transparent',
    padding: 5,
  },
  nextButtonImage: {
    width: 100,
    height: 30,
  },
});

export default Instruct1Screen; 