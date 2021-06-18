import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { theme } from '../../config';

const Tab = createMaterialTopTabNavigator();

export default function CommunityDetailsTabNavigator({
  FirstTabScreen,
  SecondTabScreen,
  communityId,
}) {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'none',
          },
          pressColor: theme.primary,
          style: { backgroundColor: theme.white },
          indicatorStyle: {
            borderBottomColor: theme.primary,
            borderBottomWidth: 2,
          },
        }}
      >
        <Tab.Screen
          name="CommunityPosts"
          children={() => <FirstTabScreen communityId={communityId} />}
          options={{ title: 'Posts' }}
        />
        <Tab.Screen
          name="CommunityAboutScreen"
          children={() => <SecondTabScreen communityId={communityId} />}
          options={{ title: 'About' }}
        />
      </Tab.Navigator>
    </>
  );
}
