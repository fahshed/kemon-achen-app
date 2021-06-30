import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AppButton } from '../../components';
import { Container, H5Bold, Body2, H6, Body1 } from '../../styles';
import NavRoutes from '../../navigation/NavRoutes';

import Api from '../../api';

export default function AdviceScreen({ route }) {
  const navigation = useNavigation();

  const { score, testId } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [anxiety, setAnxiety] = useState(null);
  const [stress, setStress] = useState(null);
  const [depression, setDepression] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await Api.submitTest(testId, score);
      setAnxiety(response.anxietyAdvice);
      setStress(response.stressAdvice);
      setDepression(response.depressionAdvice);
      setIsLoading(false);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoading ? (
        <H5Bold align="center" mt="32px" mb="24px">
          Loading...
        </H5Bold>
      ) : (
        <Container p="8px" align="flex-start">
          <H5Bold align="center" mt="32px" mb="24px">
            Advice Here
          </H5Bold>
          <H5Bold align="center" mb="24px">
            {JSON.stringify(score)}
          </H5Bold>

          <Container
            align="flex-start"
            p="8px"
            border="1px"
            corner="16px"
            bc="black"
            mb="16px"
          >
            <H5Bold align="center">Anxiety</H5Bold>
            <Body1>{anxiety.messages[0]}</Body1>
            <H6>Try these:</H6>
            {anxiety.advice.map((advice, index) => (
              <Body2 key={index}>{advice}</Body2>
            ))}
          </Container>

          <Container
            align="flex-start"
            p="8px"
            border="1px"
            corner="16px"
            bc="black"
            mb="16px"
          >
            <H5Bold align="center">Stress</H5Bold>
            <Body1>{stress.messages[0]}</Body1>
            <H6>Try these:</H6>
            {stress.advice.map((advice, index) => (
              <Body2 key={index}>{advice}</Body2>
            ))}
          </Container>

          <Container
            align="flex-start"
            p="8px"
            border="1px"
            corner="16px"
            bc="black"
            mb="16px"
          >
            <H5Bold align="center">Depression</H5Bold>
            <Body1>{depression.messages[0]}</Body1>
            <H6>Try these:</H6>
            {depression.advice.map((advice, index) => (
              <Body2 key={index}>{advice}</Body2>
            ))}
          </Container>

          <AppButton
            title="Go to Home"
            onPress={() => navigation.navigate(NavRoutes.HOME)}
          />
        </Container>
      )}
    </ScrollView>
  );
}
