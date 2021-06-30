import React from 'react';

import * as Animatable from 'react-native-animatable';

import { Container, H5Bold } from '../../styles';
import { TestQuestion, AppButton } from '../../components';

const slideIn = {
  from: {
    marginRight: 800,
  },
  to: {
    marginRight: 0,
  },
};

export default function QuestionSet({
  heading,
  questions,
  setOption,
  setStep,
  scrollRef,
  submitTest = null,
}) {
  const handleProceed = () => {
    if (!questions.some((q) => q.selectedOption === null)) {
      console.log('completed a step');
      console.log(questions.reduce((a, b) => a + b.selectedOption, 0));
      setStep((prev) => prev + 1);
      if (scrollRef !== undefined) {
        setTimeout(() => {
          scrollRef.current?.scrollTo({
            y: 0,
          });
        }, 1);
      }
      if (submitTest) {
        submitTest();
      }
    }
  };

  return (
    <Container align="flex-start">
      <H5Bold mb="32px">{heading}</H5Bold>

      <Container align="center">
        {questions.map((q, index) => (
          <Animatable.View
            key={index}
            animation={slideIn}
            duration={1000}
            delay={index * 300}
            style={{ width: '100%' }}
          >
            <TestQuestion
              question={q.question}
              selectedOption={q.selectedOption}
              onOptionSelect={(option) => {
                setOption([
                  ...questions.slice(0, index),
                  { question: q.question, selectedOption: option },
                  ...questions.slice(index + 1),
                ]);
              }}
            />
          </Animatable.View>
        ))}
      </Container>

      <AppButton mb={16} title="Proceed" onPress={handleProceed} />
    </Container>
  );
}
