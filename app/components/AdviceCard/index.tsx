import React from 'react';

import { Container, Body2, Shadow, H6Bold, Body1, H6 } from '../../styles';
import { theme } from '../../config';

const background = {
  Anxiety: theme.lightOrange,
  Stress: theme.lightLemon,
  Depression: theme.lightBlue,
};

export default function AdviceCard({ title, score = null, message, advices }) {
  return (
    <Container
      align="flex-start"
      mb="32px"
      p="10px"
      corner="16px"
      bg="primaryLight"
      style={[Shadow.shadow, { backgroundColor: background[title] }]}
    >
      <Container bg="transparent">
        {score && (
          <H6 mb="6px">
            {title} Level: {score}%
          </H6>
        )}
      </Container>
      <H6Bold mb="6px">{message}</H6Bold>
      <Body2 mb="6px">Try these:</Body2>
      {advices.map((advice, index) => (
        <Body1 key={index} mb="4px">
          • {advice}
        </Body1>
      ))}
    </Container>
  );
}
