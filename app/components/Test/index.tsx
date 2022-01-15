import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { Body2, H6Bold } from '../../styles';

export default function Test({ style }) {
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => console.log('Pressed')}
    >
      <H6Bold mb="8px">Title</H6Bold>
      <Body2 color="yellow">
        When my phone rings, my anxiety shoots through the roof. I put my
        location on with my immediate family so they know when I’m at work and
        just to text me with direct . I’m convinced something really bad
        happened to someone I love and someone is calling me to tell me. Help?
      </Body2>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
