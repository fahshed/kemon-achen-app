import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { Container, H4, H6, H5Bold } from '../../styles';
import { AppButton } from '../../components';
import NavRoutes from '../../navigation/NavRoutes';

export default function QouteScreen() {
  const [showPrompt, setShowPromt] = useState(false);
  const navigation = useNavigation();

  return (
    <Container p="16px" height="100%" justify="center">
      {showPrompt ? (
        <>
          <H5Bold mb="24px">Would you like a test?</H5Bold>
          <Container direction="row">
            <Container width="48%">
              <AppButton
                title="Yes"
                onPress={() => navigation.navigate(NavRoutes.TEST)}
              />
            </Container>
            <Container width="48%">
              <AppButton
                title="No, I'm good"
                color="secondary"
                onPress={() => navigation.navigate(NavRoutes.HOME)}
              />
            </Container>
          </Container>
        </>
      ) : (
        <Animatable.View
          animation="fadeOut"
          duration={2000}
          delay={4000}
          onAnimationEnd={() => setShowPromt(true)}
          style={{ width: '100%' }}
        >
          <H4 align="center" mb="8px">
            "Don’t Let Yesterday Take Up Too Much Of Today."
          </H4>
          <Container align="flex-end">
            <H6 mr="32px">– Will Rogers</H6>
          </Container>
        </Animatable.View>
      )}
    </Container>
  );
}
