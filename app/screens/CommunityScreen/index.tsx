import React from 'react';
import { View } from 'react-native';

import { AppButton } from '../../components';
import { Body2Bold, H5Bold } from '../../styles';

import { useAppDispatch, useAppSelector } from '../../store';
import { logout } from '../../store/reducers';

function CommunityScreen() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.User);

  return (
    <View style={{ padding: 8 }}>
      <H5Bold>Dummy account screen</H5Bold>
      <Body2Bold>{'ID: ' + user._id}</Body2Bold>
      <Body2Bold>{'Name: ' + user.name}</Body2Bold>
      <Body2Bold>{'role: ' + user.role}</Body2Bold>
      <AppButton title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
}

export default CommunityScreen;
