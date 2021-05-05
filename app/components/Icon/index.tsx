import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../config';

function Icon({
  name,
  size = 40,
  iconColor = theme.black,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size}/>
    </View>
  );
}

export default Icon;
