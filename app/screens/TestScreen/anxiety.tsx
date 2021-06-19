import React from 'react';

import { Container, H5Bold } from '../../styles';
import { TestQuestion } from '../../components';

export default function Anxiety({ questions, setOption }) {
  return (
    <Container align="flex-start">
      <H5Bold mb="32px">
        Anxiety related questions. Answer all the questions to proceed.
      </H5Bold>

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
