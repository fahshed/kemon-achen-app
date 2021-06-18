import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { theme } from '../../config';

const Tab = createMaterialTopTabNavigator();

export default function ProfessionalProfileTabNavigator({
  FirstTabScreen,
  SecondTabScreen,
  ThirdTabScreen,
  firstTabName,
  firstScreenName,
  userId,
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
          name={firstScreenName}
          children={() => <FirstTabScreen userId={userId} />}
          options={{ title: firstTabName }}
        />
        <Tab.Screen
          name="ProfessionalPosts"
          component={SecondTabScreen}
          options={{ title: 'Posts' }}
        />
        <Tab.Screen
          name="ProfessionalFeedbacks"
          component={ThirdTabScreen}
          options={{ title: 'Feedbacks' }}
        />
      </Tab.Navigator>
    </>
  );
}
