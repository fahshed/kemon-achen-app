import React, { useState, useEffect } from 'react';

import ImageHeader from '../../components/ImageHeader';
import ProfessionalProfileTabNavigator from '../../navigation/ProfessionalProfileTabNavigator';
import ChamberScreen from '../ChamberScreen';
import ProfessionalPostsScreen from '../ProfessionalPostsScreen';
import ProfessionalFeedbackScreen from '../ProfessionalFeedbackScreen';
import ProfessionalProfileInfoBar from '../../components/ProfessionalProfileInfoBar';
import { useAppSelector } from '../../store';

import Api from '../../api';

export default function ProfessionalProfileScreen({ route }) {
  const { user } = useAppSelector((state) => state.User);

  const [profileInfo, setProfileInfo] = useState(null);
  let userId = route.params;
  if (userId === undefined) {
    userId = user._id;
  }

  const getProfessionalInfo = async () => {
    const response = await Api.getProfessionalInfo(userId);
    //console.log(response);
    setProfileInfo(response);
  };

  useEffect(() => {
    getProfessionalInfo();
  }, []);

  //console.log(profileInfo);

  return (
    <>
      <ImageHeader id={profileInfo.name} />
      {profileInfo && (
        <ProfessionalProfileInfoBar
          userName={profileInfo.name}
          badges={profileInfo.specialization}
          rank={profileInfo.rank}
        />
      )}

      <ProfessionalProfileTabNavigator
        FirstTabScreen={ChamberScreen}
        SecondTabScreen={ProfessionalPostsScreen}
        ThirdTabScreen={ProfessionalFeedbackScreen}
        firstScreenName="ChamberScreen"
        firstTabName="Chamber"
        userId={userId}
      />
    </>
  );
}
