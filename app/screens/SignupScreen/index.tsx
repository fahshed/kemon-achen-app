import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { H4, Container } from '../../styles';
import { AppButton } from '../../components';
import NavRoutes from '../../navigation/NavRoutes';

function SignupScreen() {
  const navigation = useNavigation();

  return (
    <Container grow="1" justify="center">
      <H4 mb="24px">Sign up</H4>
      <Container width="70%">
        <AppButton
          title="As Regular User"
          mb={10}
          onPress={() => navigation.navigate(NavRoutes.REGULAR_SIGNUP)}
        />
        <AppButton
          title="As Professional User"
          color="secondary"
          onPress={() => navigation.navigate(NavRoutes.PROFESSIONAL_SIGNUP)}
        />
      </Container>
    </Container>
  );
}

export default SignupScreen;
