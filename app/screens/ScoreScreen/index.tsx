import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AppButton, DoubleBar } from '../../components';
import { Container, H5Bold, Body2 } from '../../styles';
import { theme } from '../../config';
import NavRoutes from '../../navigation/NavRoutes';

const FULL = 200;
const FULL_SCORE = 20;

export default function ScoreScreen({ route }) {
  const navigation = useNavigation();

  const { score, testId } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <H5Bold align="center" mt="32px" mb="24px">
        Your Mental Problem Levels
      </H5Bold>
      <Container
        justify="space-around"
        align="flex-end"
        direction="row"
        height="270px"
      >
        <Container height="100%" width="35%">
          <DoubleBar
            FULL={FULL}
            FULL_SCORE={FULL_SCORE}
            color={theme.orange}
            value={score.anxiety}
            label="Anxiety"
            delay={0}
          />
        </Container>
        <Container height="100%" width="35%">
          <DoubleBar
            FULL={FULL}
            FULL_SCORE={FULL_SCORE}
            color={theme.lemon}
            value={score.stress}
            label="Stress"
            delay={500}
          />
        </Container>
        <Container height="100%" width="35%">
          <DoubleBar
            FULL={FULL}
            FULL_SCORE={FULL_SCORE}
            color={theme.blue}
            value={score.depression}
            label="Depression"
            delay={1000}
          />
        </Container>
      </Container>
      <Container p="8px" mt="24px">
        <Body2 align="center" mb="24px">
          Your Depression, Anxiety, Stress levels vs normal levels. The range of
          0-7 can be considered to be a sign of good mental health.
        </Body2>
        <AppButton
          title="Get Our Advice"
          onPress={() =>
            navigation.navigate(NavRoutes.ADVICE, { score, testId })
          }
        />
      </Container>
    </ScrollView>
  );
}
