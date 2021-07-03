import React from 'react';

import  GeneralPostsScreen  from '../GeneralPostsScreen';

export default function ProfessionalPostsScreen({ userId }) {
  return <GeneralPostsScreen userId={userId} isCommunityFeed={false} isProfileFeed={true}/>;
}
