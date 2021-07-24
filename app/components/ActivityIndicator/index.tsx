import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function ActivityIndicator() {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <LottieView
          autoPlay
          loop
          source={require('../../assets/animations/loading.json')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'transparent',
    height: '100%',
    opacity: 1,
    width: '100%',
    zIndex: 1,
  },
});

export default ActivityIndicator;
