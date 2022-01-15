import React from 'react';

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
