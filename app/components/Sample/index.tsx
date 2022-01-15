import React from 'react';

import { TouchableOpacity } from 'react-native';

import { H4, Body2, Caption, Container } from '../../styles';
import { dateToString, capitalizeFirstLetter } from '../../utils';

const statusColor = {
  submitted: 'orange',
  processing: 'blue',
  resolved: 'green',
};

interface Props {
  onLongPress?: any;
  status: keyof typeof statusColor;
  createdAt: Date;
  ticketType: string;
  description: string;
  style?: object;
}

export default function Sample({
  onLongPress,
  status,
  createdAt,
  ticketType,
  description,
  style,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={style ? style : null}
      onLongPress={onLongPress}
    >
      <Container
        align="flex-start"
        corner="8px"
        pt="16px"
        pl="16px"
        pr="16px"
        pb="16px"
        border="1px"
        bc="grey5"
      >
        <Container direction="row" justify="space-between" mb="8px">
          <Caption color="black">{dateToString(createdAt)}</Caption>
          <Caption color="black">
            {'Status - '}
            <Caption color={statusColor[status]}>
              {status.toUpperCase()}
            </Caption>
          </Caption>
        </Container>

        <H4 color="blue" mb="8px">
          {capitalizeFirstLetter(ticketType)}
        </H4>

        <Body2>{description}</Body2>
      </Container>
    </TouchableOpacity>
  );
}
