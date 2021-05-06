import React from 'react';

import { Test, Sample } from '../../components';
import { View } from 'react-native';

function LoginScreen() {
  return (
    <View>
      <Test style={{ marginBottom: 16 }} />
      <Sample
        status="resolved"
        createdAt={new Date()}
        ticketType="Rick and Morty"
        description="LoginScreen"
      />
    </View>
  );
}

export default LoginScreen;
