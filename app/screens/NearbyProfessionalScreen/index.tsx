import { View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';

import { ItemSeparator, Post, TopSearchBar2 } from '../../components';

import { AppButton } from '../../components';
import { Body2Bold, H5Bold } from '../../styles';

import { useAppDispatch, useAppSelector } from '../../store';
import { logout } from '../../store/reducers';
import ProfessionalCard from '../../components/ProfessionalCard';
import ScreenTitleComponent from '../../components/ScreenTitleComponent';
import { theme } from '../../config';

function NearbyProfessionalScreen() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.User);

  const suggestedProfessionals = [
    {
      userName: 'Mr Bilkis Rahman',
      userId: '1234',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '1234d4',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '1234sasasas4',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '12346',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '12347',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '12348',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '12348t',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '12348r',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '12348e',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
    {
      userName: 'Mr Bilkis Rahman',
      userId: '12348w',
      badges: [
        {
          name: 'PTSD',
          id: '12345',
        },
        {
          name: 'Anxiety',
          id: '56789',
        },
      ],
      rank: '100',
      location: '24/B Baker Street',
    },
  ];

  const renderItem = ({ item }) => (
    <ProfessionalCard
      userName={item.userName}
      badges={item.badges}
      rank={item.rank}
      location={item.location}
      handleNavigation={() => console.log('Pressed!')}
    />
  );

  return (
    <>
      <ScreenTitleComponent screenName="Suggested Professionals" />
      <FlatList
        data={suggestedProfessionals}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(professional) => professional.userId}
        renderItem={renderItem}
      />
    </>
  );
}

export default NearbyProfessionalScreen;
