import React from 'react';

import ImageHeader from '../../components/ImageHeader';
import RegularProfileInfoBar from '../../components/RegularProfileInfoBar';
import ProfessionalProfileTabNavigator from '../../navigation/ProfessionalProfileTabNavigator';
import ChamberScreen from '../ChamberScreen';
import ProfessionalPostsScreen from '../ProfessionalPostsScreen';
import ProfessionalFeedbackScreen from '../ProfessionalFeedbackScreen';
import ProfessionalProfileInfoBar from '../../components/ProfessionalProfileInfoBar';

export default function UserProfileScreen() {
  const badges = [
    { name: 'PTSD', id: '1' },
    { name: 'Anxiety', id: '2' },
    { name: 'Stress', id: '3' },
  ];
  return (
    <>
      <ImageHeader />
      <ProfessionalProfileInfoBar
        userName="Dr. Rishov Paul"
        badges={badges}
        rank="100"
      />

      <ProfessionalProfileTabNavigator
        FirstTabScreen={ChamberScreen}
        SecondTabScreen={ProfessionalPostsScreen}
        ThirdTabScreen={ProfessionalFeedbackScreen}
        firstScreenName="ChamberScreen"
        firstTabName="Chamber"
      />
    </>
  );
}
