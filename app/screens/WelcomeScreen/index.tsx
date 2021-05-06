import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

import { AppButton } from '../../components';
import { NavRoutes } from '../../navigation';
import { H6Bold } from '../../styles';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={7}
      source={{ uri: 'https://picsum.photos/200' }}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <H6Bold style={{ marginTop: 8 }}>
          The only journey is the journey within
        </H6Bold>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(NavRoutes.LOGIN)}
        />
        <AppButton
          title="Signup"
          color="secondary"
          onPress={() => navigation.navigate(NavRoutes.SIGNUP)}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center', //align items across the secondary axis(horizontal)
  },
  buttonContainer: {
    padding: 16,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 120,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
