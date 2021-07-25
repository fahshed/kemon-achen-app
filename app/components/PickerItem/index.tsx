import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { theme } from '../../config';
import { Body1Bold } from '../../styles';

function PickerItem({ item, index, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: index % 2 === 0 ? theme.grey1 : theme.white },
        ]}
      >
        <Image
          style={styles.image}
          source={{
            uri: `https://picsum.photos/seed/${item.name}/300`,
          }}
        />
        <Body1Bold color="grey6" align="center">
          {item.name}
        </Body1Bold>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 2,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    height: 28,
    width: 28,
    borderRadius: 14,
    marginRight: 8,
    marginLeft: 8,
  },
});

export default PickerItem;
