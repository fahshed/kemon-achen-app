import React from 'react';

import { Container } from '../../styles';
import { TestQuestion } from '../../components';

export default function TestScreen() {
  return (
    <Container p="16px">
      <TestQuestion />
    </Container>
  );
}
