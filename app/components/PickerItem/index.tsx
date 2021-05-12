import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../config';
import { Body1Bold } from '../../styles';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 8, margin: 1, backgroundColor: theme.grey1 }}>
        <Body1Bold color="grey6" align="center">
          {item.name}
        </Body1Bold>
      </View>
    </TouchableOpacity>
  );
}

export default PickerItem;
