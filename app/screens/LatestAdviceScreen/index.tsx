import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { CommonActions, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import { AppButton, AdviceCard, ActivityIndicator } from '../../components';
import { Container, H5Bold } from '../../styles';

import Api from '../../api';

export default function LatestAdviceScreen() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [anxiety, setAnxiety] = useState(null);
  const [stress, setStress] = useState(null);
  const [depression, setDepression] = useState(null);

  const getLatestAdvice = async () => {
    try {
      const response = await Api.getLatestAdvice();
      setAnxiety(response.anxietyAdvice);
      setStress(response.stressAdvice);
      setDepression(response.depressionAdvice);
      setIsLoading(false);
    } catch (error) {
      console.log('latest advice fetch failed', error);
    }
  };

  useEffect(() => {
    getLatestAdvice();
  }, []);

  const notifyingDone = async () => {
    try {
      await Api.doneFollowAdvice();
    } catch (error) {
      console.log('error notifying', error);
    }
  };

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container p="8px" grow="1">
        <H5Bold align="center" mt="24px" mb="24px">
          Advices from Last Test
        </H5Bold>

        <Animatable.View
          animation="slideInUp"
          duration={1000}
          delay={0}
          style={{ width: '100%' }}
        >
          <AdviceCard
            title="Anxiety"
            //score={15 * 5}
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
            //score={15 * 5} //score should be removed
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
            //score={15 * 5}
            message={depression.messages[0]}
            advices={depression.advice}
          />
        </Animatable.View>
        <Animatable.View
          animation="slideInUp"
          duration={1000}
          delay={0}
          style={{ width: '100%', alignItems: 'center' }}
        >
          <H5Bold mb="24px">Did you follow our advice?</H5Bold>
          <Container direction="row">
            <Container width="48%">
              <AppButton
                title="Yes"
                onPress={() => {
                  notifyingDone();
                  navigation.dispatch(resetAction);
                }}
              />
            </Container>
            <Container width="48%">
              <AppButton
                title="No"
                color="secondary"
                onPress={() => navigation.dispatch(resetAction)}
              />
            </Container>
          </Container>
        </Animatable.View>
      </Container>
    </ScrollView>
  );
}

const resetAction = CommonActions.reset({
  index: 1,
  routes: [{ name: 'App' }],
});
