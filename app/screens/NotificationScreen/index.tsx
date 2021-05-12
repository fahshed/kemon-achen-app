import React from 'react';
import { View } from 'react-native';

function NotificationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 40,
          //width: '100%',
          flexDirection: 'row',
          flex: 0.2,
          padding: 8,
          //backgroundColor: theme.lightGrey,
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 3, backgroundColor: 'green' }} />
        <View style={{ flex: 1, backgroundColor: 'yellow' }} />
      </View>
    </View>
  );
}

export default NotificationScreen;
