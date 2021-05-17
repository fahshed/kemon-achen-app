import React from 'react';

import { Body2, H6Bold } from '../../styles';
import BottomBar1 from '../BottomBar1';
import UserInfoBar1 from '../UserInfoBar1';

function Post({ postObj }) {
  return (
    <>
      <UserInfoBar1
        username={postObj.postedBy.name}
        communityName={postObj.community.name}
        postedAgo={postObj.createdAt}
      />
      <H6Bold pb="8px" pl="8px" pr="8px" pt="8px">
        {postObj.title}
      </H6Bold>
      <Body2 mb="8px" pl="8px" pr="8px" pt="8px">
        {postObj.content}
      </Body2>
      <BottomBar1
        likeCount={postObj.voteCount}
        commentCount={postObj.commentCount}
      />
    </>
  );
}

export default Post;
