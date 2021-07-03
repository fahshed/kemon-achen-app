import React, {useState, useEffect} from 'react';

import ImageHeader from '../../components/ImageHeader';
import ProfessionalProfileTabNavigator from '../../navigation/ProfessionalProfileTabNavigator';
import ChamberScreen from '../ChamberScreen';
import ProfessionalPostsScreen from '../ProfessionalPostsScreen';
import ProfessionalFeedbackScreen from '../ProfessionalFeedbackScreen';
import ProfessionalProfileInfoBar from '../../components/ProfessionalProfileInfoBar';

import Api from '../../api';

export default function ProfessionalProfileScreen() {

  //const { user } = useAppSelector((state) => state.User);

  const [profileInfo, setProfileInfo] = useState(null);

  const userId = '60830ac18fc20123c40f10c0';

  const getProfessionalInfo = async () => {
    const response = await Api.getProfessionalInfo(userId);
    console.log(response);
    setProfileInfo(response);
  };

  useEffect(() => {
    getProfessionalInfo();
  }, []);

  //console.log(profileInfo);

  return (
    <>
      <ImageHeader />
      {
        profileInfo && (
          <ProfessionalProfileInfoBar
          userName={profileInfo.name}
          badges={profileInfo.specialization}
          rank={profileInfo.rank}
          />
        )
      }

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
