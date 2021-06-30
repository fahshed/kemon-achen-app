import React, { useState, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, H5Bold } from '../../styles';
import Api from '../../api';
import NavRoutes from '../../navigation/NavRoutes';

import QuestionSet from './questionSet';

const testId = '60d1e485755ce453c688e5e2';

export default function TestScreen() {
  const navigation = useNavigation();

  const scrollRef = useRef(null);

  const [step, setStep] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const [testName, setTestName] = useState('');
  const [anxietyQuestions, setAnxietyQuestions] = useState([]);
  const [stressQuestions, setStressQuestions] = useState([]);
  const [depressionQuestions, setDepressionQuestions] = useState([]);

  const submitTest = () => {
    console.log('submit');
    const score = {
      anxiety: anxietyQuestions.reduce((a, b) => a + b.selectedOption, 0),
      stress: stressQuestions.reduce((a, b) => a + b.selectedOption, 0),
      depression: depressionQuestions.reduce((a, b) => a + b.selectedOption, 0),
    };
    console.log(score);
    navigation.navigate(NavRoutes.SCORE, { testId, score });
    // const response = await Api.submitTest(testId, score);
    // console.log(response);
  };

  useEffect(() => {
    (async () => {
      const response = await Api.getTestById(testId);
      setTestName(response.name);
      setAnxietyQuestions(
        response.anxietyQuestions.map((q) => ({
          question: q,
          selectedOption: null,
        })),
      );
      setStressQuestions(
        response.stressQuestions.map((q) => ({
          question: q,
          selectedOption: null,
        })),
      );
      setDepressionQuestions(
        response.depressionQuestions.map((q) => ({
          question: q,
          selectedOption: null,
        })),
      );
      setIsLoading(false);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
      {isLoading ? (
        <H5Bold align="center">Loading</H5Bold>
      ) : (
        <Container p="8px">
          <H5Bold align="center" mb="16px">
            {testName}
          </H5Bold>
          {step === 0 && (
            <QuestionSet
              heading="Anxiety"
              questions={anxietyQuestions}
              setOption={setAnxietyQuestions}
              setStep={setStep}
              scrollRef={scrollRef}
            />
          )}
          {step === 1 && (
            <QuestionSet
              heading="Stress"
              questions={stressQuestions}
              setOption={setStressQuestions}
              setStep={setStep}
              scrollRef={scrollRef}
            />
          )}
          {step === 2 && (
            <QuestionSet
              heading="Depression"
              questions={depressionQuestions}
              setOption={setDepressionQuestions}
              setStep={setStep}
              scrollRef={scrollRef}
              submitTest={submitTest}
            />
          )}
        </Container>
      )}
    </ScrollView>
  );
}
