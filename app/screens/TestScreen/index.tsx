import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Container } from '../../styles';

import Anxiety from './anxiety';
import Stress from './stress';

export default function TestScreen() {
  const [step, setStep] = useState(0);

  const [anxietyQuestions, setAnxietyQuestions] = useState(QUESTIONS);
  const [stressQuestions, setStressQuestions] = useState(QUESTIONS);

  if (step === 0 && !anxietyQuestions.some((q) => q.selectedOption === null)) {
    console.log('completed one step');
    console.log(anxietyQuestions.reduce((a, b) => a + b.selectedOption, 0));
    setStep(1);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container p="8px">
        {step === 0 && (
          <Anxiety
            questions={anxietyQuestions}
            setOption={setAnxietyQuestions}
          />
        )}
        {step === 1 && (
          <Stress questions={stressQuestions} setOption={setStressQuestions} />
        )}
      </Container>
    </ScrollView>
  );
}

const QUESTIONS = [
  {
    question: 'Do you feel that life is very rewarding?',
    selectedOption: null,
  },
  {
    question: 'Are you optimistic about the future?',
    selectedOption: null,
  },
  {
    question: 'Do you feel that life is very rewarding?',
    selectedOption: null,
  },
  {
    question: 'Are you optimistic about the future?',
    selectedOption: null,
  },
  {
    question: 'Are you optimistic about the future?',
    selectedOption: null,
  },
];
