import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Button1: undefined;
  Button2: undefined;
  Button3: undefined;
  Button4: undefined;
  Button5: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/homepage.jpg')}
        style={styles.backgroundImage}
        resizeMode="contain"
      >
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Button1')}
        />
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Button2')}
        />
        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate('Button3')}
        />
        <TouchableOpacity
          style={styles.button4}
          onPress={() => navigation.navigate('Button4')}
        />
        <TouchableOpacity
          style={styles.button5}
          onPress={() => navigation.navigate('Button5')}
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
  button1: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '35%',
    height: '15.6%',
    backgroundColor: 'transparent',
  },
  button2: {
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '35%',
    height: '15.6%',
    backgroundColor: 'transparent',
  },
  button3: {
    position: 'absolute',
    top: '45%',
    left: '10%',
    width: '35%',
    height: '15.6%',
    backgroundColor: 'transparent',
  },
  button4: {
    position: 'absolute',
    top: '45%',
    right: '10%',
    width: '35%',
    height: '15.6%',
    backgroundColor: 'transparent',
  },
  button5: {
    position: 'absolute',
    top: '65%',
    left: '25%',
    width: '50%',
    height: '15.6%',
    backgroundColor: 'transparent',
  },
});

export default HomeScreen; 