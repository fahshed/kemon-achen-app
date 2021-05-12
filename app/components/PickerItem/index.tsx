import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../config';
import { Body1 } from '../../styles';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 8, margin: 1, backgroundColor: theme.lightGrey }}>
        <Body1 style={{ alignSelf: 'center' }}>{item.name}</Body1>
      </View>
    </TouchableOpacity>
  );
}

export default PickerItem;
