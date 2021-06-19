import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, H5Customized, Body2, Shadow } from '../../styles';

const optionLabels = ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'];

export default function TestQuestion({
  question,
  selectedOption,
  onOptionSelect,
}) {
  return (
    <Container
      align="flex-start"
      mb="32px"
      p="10px"
      pt="16px"
      pb="16px"
      corner="16px"
      bg="primaryLight"
      style={Shadow.shadow}
    >
      <H5Customized mb="16px">{question}</H5Customized>
      <Container direction="row" bg="transparent">
        {optionLabels.map((label, index) => (
          <OptionButton
            key={label}
            label={label}
            selected={index === selectedOption}
            onSelect={() => onOptionSelect(index)}
          />
        ))}
      </Container>
    </Container>
  );
}

function OptionButton({ label, selected, onSelect }) {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={onSelect}>
      <Container bg={selected ? 'secondary' : 'white'} p="10px" corner="16px">
        <Body2 color={selected ? 'white' : 'black'}>{label}</Body2>
      </Container>
    </TouchableOpacity>
  );
}
