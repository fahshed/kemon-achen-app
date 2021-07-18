import React, { useState, useEffect } from 'react';

import ProfessionalCard from '../../components/ProfessionalCard';
import NavRoutes from '../../navigation/NavRoutes';
import Api from '../../api';

function NearbyProfessionalScreen({ navigation }) {
  const [professionalList, setProfessionalList] = useState(null);

  const getProfessionalList = async () => {
    const response = await Api.getSuggestedProfessionals('rank');
    setProfessionalList(response);
  };

  useEffect(() => {
    getProfessionalList();
  }, []);

  console.log(professionalList);

  return (
    <>
      {professionalList &&
        professionalList.map((professional, index) => (
          <ProfessionalCard
            key={index}
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
        ))}
    </>
  );
}

export default NearbyProfessionalScreen;
