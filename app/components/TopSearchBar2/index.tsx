import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../config';
import CustomTextInput from '../CustomTextInput';
import NavRoutes from '../../navigation/NavRoutes';

function TopSearchBar2({ communityId, communityName }) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  //console.log(textInput);

  return (
    <View style={styles.container}>
      {/* <TouchableHighlight
        onPress={() => navigation.navigate(NavRoutes.USER_PROFILE)}
      >
        <Image
          style={{ height: 40, width: 40, borderRadius: 20 }}
          source={{ uri: 'https://picsum.photos/200' }}
        />
      </TouchableHighlight> */}
      <View style={{ flex: 1 }}>
        <CustomTextInput
          IconComponent={
            <Ionicons
              color={theme.grey6}
              name="search-outline"
              size={28}
              style={{ paddingLeft: 8, paddingRight: 8 }}
            />
          }
          placeholder={`Search in community ${communityName}`}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={() => {
            navigation.navigate(NavRoutes.COMMUNITY_SEARCH_DETAILS, {
              searchQuery,
              communityId,
            });
          }}
          returnKeyType="search"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.grey1,
    padding: 8,
  },
});

export default TopSearchBar2;
