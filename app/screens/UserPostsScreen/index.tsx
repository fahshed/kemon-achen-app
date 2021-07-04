import React from 'react';

//import { ItemSeparator } from '../../components';
//import UserProfileCommentCard from '../../components/UserProfileCommentCard';

//import { theme } from '../../config';

import GeneralPostsScreen from '../../screens/GeneralPostsScreen';
import { useAppSelector } from '../../store';

export default function UserPostsScreen() {
  const { user } = useAppSelector((state) => state.User);
  return (
    <GeneralPostsScreen
      userId={user._id}
      isCommunityFeed={false}
      isProfileFeed={true}
    />
  );
}
