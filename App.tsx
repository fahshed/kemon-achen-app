import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { theme } from './app/config';

import {
  AppButton,
  AppTextInput,
  BottomBar1,
  BottomBar2,
  UserInfobar1,
} from './app/components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <BottomBar1
            onLikePress={() => console.log('Like pressed')}
            onCommentPress={() => console.log('Comment pressed')}
            onSharePress={() => console.log('Share pressed')}
          />
          <AppButton
            color={'secondary'}
            title={'Login'}
            onPress={() => console.log('hello button')}
          />
          <BottomBar2
            onLikePress={() => console.log('reply Like pressed')}
            onReplyPress={() => console.log('reply pressed')}
          />
          <UserInfobar1 />

          <AppTextInput icon="email" placeholder="Enter your E-mail" />
          <AppTextInput icon="lock" placeholder="Enter your Password" />
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
