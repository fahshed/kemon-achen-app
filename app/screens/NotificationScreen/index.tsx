import React from 'react';
import { Button, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Body2Bold, H5Bold } from '../../styles';
import { AppButton } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { logout } from '../../store/reducers';
import NavRoutes from '../../navigation/NavRoutes';

export default function NotificationScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.User);

  return (
    <View style={{ padding: 8 }}>
      <View style={{ padding: 8 }}>
        <H5Bold>Dummy account screen</H5Bold>
        <Body2Bold>{'ID: ' + user._id}</Body2Bold>
        <Body2Bold>{'Name: ' + user.name}</Body2Bold>
        <Body2Bold>{'role: ' + user.role}</Body2Bold>
        <AppButton title="Logout" onPress={() => dispatch(logout())} />
      </View>

      <Button
        title="Go to Test Screen"
        onPress={() => navigation.navigate(NavRoutes.TEST)}
      />
      <Button
        title="Go to Score Screen"
        onPress={() => navigation.navigate(NavRoutes.SCORE)}
      />
    </View>
  );
}
