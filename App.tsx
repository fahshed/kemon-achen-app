import React from 'react';

import { ThemeProvider } from 'styled-components';

import { HomeScreen } from './app/screens';
import { theme } from './app/config';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
