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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
    opacity: 1,
    zIndex: 1,
  },
});

export default ActivityIndicator;
