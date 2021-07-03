import React from 'react';

import AnimatedBar from '../AnimatedBar';
import { Container, Body1Bold, H6 } from '../../styles';

export default function DoubleBar({
  FULL,
  FULL_SCORE,
  color,
  value,
  label,
  delay,
}) {
  return (
    <Container width="auto" height="100%">
      <Container width="auto" direction="row" height="88%">
        <Container
          width="auto"
          height="100%"
          justify="flex-end"
          align="center"
          bg="grey1"
          corner="16px"
          mr="10px"
        >
          <Body1Bold mb="2px">{value * 5}</Body1Bold>
          <AnimatedBar
            value={FULL * (value / FULL_SCORE)}
            delay={delay}
            color={color}
            opacity={1}
          />
        </Container>
        <Container
          width="auto"
          height="100%"
          justify="flex-end"
          align="center"
          bg="grey1"
          corner="16px"
        >
          <Body1Bold mb="2px">{7 * 5}</Body1Bold>
          <AnimatedBar
            value={FULL * (7 / FULL_SCORE)}
            delay={delay}
            color={color}
            opacity={0.3}
          />
        </Container>
      </Container>
      <H6 align="center">{label}</H6>
    </Container>
  );
}
