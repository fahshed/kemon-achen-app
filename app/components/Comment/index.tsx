import React from 'react';
import { View } from 'react-native';

//import { theme } from '../../config';
import BottomBar2 from '../../components/BottomBar2';
import UserInfoBar3 from '../../components/UserInfoBar3';
import { Body2 } from '../../styles';

function Comment({
  commenterName,
  commentBody,
  commentedAgo,
  commentLikeCount,
  RankBadgeComponent = null,
}) {
  return (
    <View>
      <UserInfoBar3
        commenterName={commenterName}
        commentedAgo={commentedAgo}
        RankBadgeComponent={RankBadgeComponent}
      />
      <Body2 pl="8px" pr="8px" pt="8px" pb="8px">
        {commentBody}
      </Body2>
      <BottomBar2 commentLikeCount={commentLikeCount} />
    </View>
  );
}

export default Comment;
