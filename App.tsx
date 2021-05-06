import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './app/config';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app/navigation';
import NavigationTheme from './app/navigation/NavigationTheme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer theme={NavigationTheme}>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
