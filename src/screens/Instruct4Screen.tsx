import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Dimensions, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<ReactNavigation.RootParamList>;

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Instruct4Screen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/instruct4.png')}
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
          style={styles.leakButton}
          onPress={() => navigation.navigate('Button4')}
          activeOpacity={0.7}
        />
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
  leakButton: {
    position: 'absolute',
    top: '85%',
    right: '10%',
    width: 115,
    height: 69,
    backgroundColor: 'transparent',
    zIndex: 2,
  },
});

export default Instruct4Screen; 