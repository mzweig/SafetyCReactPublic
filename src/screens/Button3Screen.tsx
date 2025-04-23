import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, SafeAreaView, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Button3Screen = () => {
  const navigation = useNavigation();
  const [showBluetoothModal, setShowBluetoothModal] = useState(false);

  const handleBluetoothPress = () => {
    setShowBluetoothModal(true);
  };

  const closeBluetoothModal = () => {
    setShowBluetoothModal(false);
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
        source={require('../assets/testwater.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.bluetoothMarker}
        onPress={handleBluetoothPress}
      />
      <TouchableOpacity 
        style={styles.instructionsMarker}
        onPress={() => navigation.navigate('Instruct1')}
      />
      
      {/* Bluetooth Connection Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showBluetoothModal}
        onRequestClose={closeBluetoothModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Connect to Device</Text>
            <Text style={styles.modalText}>
              Please connect to the SafetyC device using Bluetooth Classic in your device settings.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeBluetoothModal}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  instructionsMarker: {
    position: 'absolute',
    top: '50%',
    left: '12%',
    width: 260,
    height: 60,
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button3Screen; 