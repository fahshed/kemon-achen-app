import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

import { AppButton } from '../../components';
import NavRoutes from '../../navigation/NavRoutes';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      source={require('../../assets/welcome.jpeg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          mb={8}
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
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {
    padding: 16,
    width: '100%',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 70,
  },
  logoContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
