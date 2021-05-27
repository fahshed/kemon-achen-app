import React, { PureComponent } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

import { Body2, H6Bold } from '../../styles';
import BottomBar1 from '../BottomBar1';
import UserInfoBar2 from '../UserInfoBar2';

interface PostProps {
  communityName: string;
  postedAgo: string;
  title: string;
  content: string;
  voteCount: number;
  commentCount: number;
  onLikePress: Function;
  onPress: (event: GestureResponderEvent) => void;
}

class UserProfilePost extends PureComponent<PostProps> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <>
          <UserInfoBar2
            communityName={this.props.communityName}
            postedAgo={this.props.postedAgo}
          />
          <H6Bold pb="8px" pl="8px" pr="8px" pt="8px">
            {this.props.title}
          </H6Bold>
          <Body2 mb="8px" pl="8px" pr="8px" pt="8px">
            {this.props.content}
          </Body2>
          <BottomBar1
            voteCount={this.props.voteCount}
            commentCount={this.props.commentCount}
          />
        </>
      </TouchableOpacity>
    );
  }
}

export default UserProfilePost;
