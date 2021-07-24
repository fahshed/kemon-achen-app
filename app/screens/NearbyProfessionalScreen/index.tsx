import React, { useState, useEffect } from 'react';

import ProfessionalCard from '../../components/ProfessionalCard';
import NavRoutes from '../../navigation/NavRoutes';
import Api from '../../api';
import { ScrollView, View } from 'react-native';
import { ActivityIndicator, ItemSeparator } from '../../components';
import { theme } from '../../config';

function NearbyProfessionalScreen({ navigation }) {
  const [professionalList, setProfessionalList] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(true);

  const getProfessionalList = async () => {
    const response = await Api.getSuggestedProfessionals('rank');
    setProfessionalList(response);
    setIsRefreshing(false);
  };

  useEffect(() => {
    (async () => {
      await getProfessionalList();
    })();
  }, []);

  //console.log(professionalList);

  return isRefreshing ? (
    <ActivityIndicator />
  ) : (
    <ScrollView>
      {professionalList &&
        professionalList.map((professional, index) => (
          <View key={index}>
            <ProfessionalCard
              userName={professional.name}
              badges={professional.specializations}
              rank={professional.rank}
              location={professional.address}
              handleNavigation={() =>
                navigation.navigate(
                  NavRoutes.PROFESSIONAL_USER_PROFILE,
                  professional._id,
                )
              }
            />
            <ItemSeparator height={8} color={theme.grey3} />
          </View>
        ))}
    </ScrollView>
  );
}

export default NearbyProfessionalScreen;
