import React from 'react';
import { View, Text } from 'react-native';

//import { ItemSeparator } from '../../components';
//import UserProfileCommentCard from '../../components/UserProfileCommentCard';

//import { theme } from '../../config';

export default function CommunityAboutScreen({ communityId }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>This is a dummy screen with id: {communityId}</Text>
    </View>
  );
}
