import React from 'react';
import { FlatList } from 'react-native';

import ProfessionalCard from '../../components/ProfessionalCard';
import { theme } from '../../config';
import { ItemSeparator } from '../../components';
import NavRoutes from '../../navigation/NavRoutes';

function NearbyProfessionalScreen({ navigation }) {
  const suggestedProfessionals = [
    {
      userName: 'Dr Bilkis Rahman',
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
      userName: 'Dr Anisur Rahman',
      userId: '1234d4',
      badges: [
        {
          name: 'Stress',
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
      userName: 'Dr Shahana',
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
      userName: 'Dr Neil Armstrong',
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
      userName: 'Dr Rakin Rahman',
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
  ];

  const renderItem = ({ item }) => (
    <ProfessionalCard
      userName={item.userName}
      // badges={item.badges}
      rank={item.rank}
      location={item.location}
      handleNavigation={() =>
        navigation.navigate(NavRoutes.PROFESSIONAL_USER_PROFILE)
      }
    />
  );

  return (
    <>
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
