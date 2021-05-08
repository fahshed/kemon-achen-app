import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from './app/config';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator, AuthNavigator } from './app/navigation';
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
              {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          </AuthContext.Provider>
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
