import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from './app/config';
import { AppNavigator } from './app/navigation';
import NavigationTheme from './app/navigation/NavigationTheme';
import { AuthContext, AuthStorage } from './app/authentication';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const userFromAuthStorage = await AuthStorage.getUser();
    if (userFromAuthStorage) {
      setUser(userFromAuthStorage);
    }
  };

  // useEffect(() => {
  //   restoreUser();
  // }, []);
  //this is for removal of flickring of welcome screen in reload
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() => console.log('error apploading')}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer theme={NavigationTheme}>
              {user ? <AppNavigator /> : <AppNavigator />}
            </NavigationContainer>
          </AuthContext.Provider>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
