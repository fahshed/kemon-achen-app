import React from 'react';
import { View } from 'react-native';
import { AppButton } from '../../components';
import { useAuth } from '../../hooks';

import { Body2Bold, H5Bold } from '../../styles';

function CommunityScreen() {
  //handling logout functionality here
  const { user, logOut } = useAuth(); //getting the current user

  return (
    <View style={{ padding: 8 }}>
      <H5Bold>Dummy account screen</H5Bold>
      <Body2Bold>{'ID: ' + user.id}</Body2Bold>
      <Body2Bold>{'iat: ' + user.iat}</Body2Bold>
      <AppButton title="Logout" onPress={() => logOut()} />
    </View>
  );
}

export default CommunityScreen;
