import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../../config';
import { Body2Bold, Caption } from '../../styles';
//import { useAppSelector } from '../../store';

function RegularProfileInfoBar({ userName, profileDescription }) {
  //const { user } = useAppSelector((state) => state.User);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Body2Bold>{userName}</Body2Bold>
        <Caption>{profileDescription}</Caption>
      </View>
      {/* {user.role === 'regular' ? (
        <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 16 }}>
          <Caption color="red">Edit</Caption>
        </TouchableOpacity>
      ) : null} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: theme.white,
    flexDirection: 'row',
    padding: 8,
    width: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 2,
  },
});

export default RegularProfileInfoBar;
