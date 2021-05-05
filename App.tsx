import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { theme } from './app/config';
import BottomBar1 from './app/components/BottomBar1';
import { BottomBar2 } from './app/components';
import UserInfoBar1 from './app/components/UserInfoBar1';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <BottomBar1
            onLikePress={() => console.log('Like pressed')}
            onCommentPress={() => console.log('Comment pressed')}
            onSharePress={() => console.log('Share pressed')} />
          <BottomBar2
            onLikePress={() => console.log('reply Like pressed')}
            onReplyPress={() => console.log('reply pressed')} />
          <UserInfoBar1 />
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
