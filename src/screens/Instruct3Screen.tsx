import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const Instruct3Screen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/instruct3.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
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
});

export default Instruct3Screen; 