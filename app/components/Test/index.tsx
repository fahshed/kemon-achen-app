import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

export default function Test() {
  return (
    <Pressable
      style={styles.container}
      android_ripple={{ radius: 0, color: '#eeeeee' }}
      onPress={() => console.log('Pressed')}
    >
      <Text>Hello</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    height: 30,
    width: 100,
  },
});
