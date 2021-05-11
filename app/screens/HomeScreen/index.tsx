import React from 'react';
import { View } from 'react-native';

import { Sample } from '../../components';

export default function HomeScreen() {
  return (
    <View style={{ padding: 8 }}>
      <Sample
        status="resolved"
        createdAt={new Date()}
        ticketType="Rick and Morty"
        description="I'm Mr Misix"
        style={{ marginBottom: 16 }}
      />
    </View>
  );
}
