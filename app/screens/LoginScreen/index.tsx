import React from 'react';
import { Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppButton, AppTextInput } from '../../components';
import { theme } from '../../config';
import { NavRoutes } from '../../navigation';

function LoginScreen({ navigation }) {
  return (
    <View style={{ padding: 8 }}>
      <Image
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 100,
          marginBottom: 0,
        }}
        source={require('../../assets/logo-red.png')}
      />
      <AppTextInput
        IconComponent={
          <MaterialCommunityIcons
            color={theme.grey6}
            name="email"
            size={24}
            style={{ padding: 8 }}
          />
        }
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        placeholder="Enter your E-mail"
        textContentType="emailAddress"
      />
      <AppTextInput
        IconComponent={
          <MaterialCommunityIcons
            color={theme.grey6}
            name="lock"
            size={24}
            style={{ padding: 8 }}
          />
        }
        placeholder="Enter your Password"
        secureTextEntry
      />
      <AppButton
        title="Login"
        onPress={() => navigation.navigate(NavRoutes.HOME)}
      />
    </View>
  );
}

export default LoginScreen;
