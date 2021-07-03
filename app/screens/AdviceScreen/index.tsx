import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { AppButton, AdviceCard } from '../../components';
import { Container, H5Bold } from '../../styles';

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
        <Container p="8px" grow="1">
          <H5Bold align="center" mt="24px" mb="24px">
            Advices
          </H5Bold>

          <Animatable.View
            animation="slideInUp"
            duration={1000}
            delay={0}
            style={{ width: '100%' }}
          >
            <AdviceCard
              title="Anxiety"
              score={score.anxiety * 5}
              message={anxiety.messages[0]}
              advices={anxiety.advice}
            />
          </Animatable.View>

          <Animatable.View
            animation="slideInUp"
            duration={1000}
            delay={0}
            style={{ width: '100%' }}
          >
            <AdviceCard
              title="Stress"
              score={score.stress * 5}
              message={stress.messages[0]}
              advices={stress.advice}
            />
          </Animatable.View>

          <Animatable.View
            animation="slideInUp"
            duration={1000}
            delay={0}
            style={{ width: '100%' }}
          >
            <AdviceCard
              title="Depression"
              score={score.depression * 5}
              message={depression.messages[0]}
              advices={depression.advice}
            />
          </Animatable.View>

          <Animatable.View
            animation="slideInUp"
            duration={1000}
            delay={0}
            style={{ width: '100%' }}
          >
            <AppButton
              title="Go to Home"
              onPress={() => navigation.navigate('Root')}
            />
          </Animatable.View>
        </Container>
      )}
    </ScrollView>
  );
}
