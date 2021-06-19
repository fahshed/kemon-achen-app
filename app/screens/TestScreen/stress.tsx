import React from 'react';

import { Container, H5Bold } from '../../styles';
import { TestQuestion } from '../../components';

export default function Stress({ questions, setOption }) {
  return (
    <Container align="flex-start">
      <H5Bold mb="32px">Now for stress related questions</H5Bold>

      {questions.map((q, index) => (
        <TestQuestion
          key={index}
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
      ))}
    </Container>
  );
}
