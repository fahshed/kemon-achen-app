import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../config';
import CustomTextInput from '../CustomTextInput';

function TopSearchBar2() {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 40, width: 40, borderRadius: 20 }}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <View style={{ flex: 1 }}>
        <CustomTextInput
          IconComponent={
            <Ionicons
              color={theme.grey6}
              name="search-outline"
              size={28}
              style={{ paddingLeft: 8, paddingRight: 8 }}
            />
          }
          placeholder="Search"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.grey1,
    marginTop: 8,
    padding: 8,
  },
});

export default TopSearchBar2;
