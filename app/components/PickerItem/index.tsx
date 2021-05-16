import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { theme } from '../../config';
import { Body1Bold } from '../../styles';

function PickerItem({ item, index, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 8,
          margin: 2,
          backgroundColor: index % 2 === 0 ? theme.grey1 : theme.white,
          flexDirection: 'row',
          //justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Image
          style={{
            height: 28,
            width: 28,
            borderRadius: 14,
            marginRight: 8,
            marginLeft: 8,
          }}
          source={{ uri: 'https://picsum.photos/100' }}
        />
        <Body1Bold color="grey6" align="center">
          {item.name}{' '}
        </Body1Bold>
      </View>
    </TouchableOpacity>
  );
}

export default PickerItem;
