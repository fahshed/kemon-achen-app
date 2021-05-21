import React from 'react';
import { StyleSheet } from 'react-native';

// import AppLoading from 'expo-app-loading';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { theme } from './app/config';
import { store, persistor } from './app/store';
import Navigation from './app/navigation';

export default function App() {
  // const [user, setUser] = useState();
  // const [isReady, setIsReady] = useState(false);

  // const restoreUser = async () => {
  //   const userFromAuthStorage = await AuthStorage.getUser();
  //   if (userFromAuthStorage) {
  //     setUser(userFromAuthStorage);
  //   }
  // };

  // useEffect(() => {
  //   restoreUser();
  // }, []);
  //this is for removal of flickring of welcome screen in reload
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={restoreUser}
  //       onFinish={() => setIsReady(true)}
  //       onError={() => console.log('error apploading')}
  //     />
  //   );
  // }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <Navigation />
            </SafeAreaView>
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
