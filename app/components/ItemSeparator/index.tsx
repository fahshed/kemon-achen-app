import React from 'react';
import { View } from 'react-native';

import { theme } from '../../config';

function ItemSeparator({ height = 1, color = theme.grey5 }) {
  return (
    <View
      style={{
        backgroundColor: color,
        height: height,
      }}
    />
  );
}

export default ItemSeparator;
