import React, { PureComponent } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

import { Body2, H6Bold } from '../../styles';
import BottomBar1 from '../BottomBar1';
import UserInfoBar1 from '../UserInfoBar1';
import CommunityPostHeader from '../../components/CommunityPostHeader';

interface PostProps {
  username: string;
  communityName: string;
  postedAgo: any;
  title: string;
  content: string;
  voteCount: Number;
  commentCount: Number;
  onLikePress: Function;
  onPress: (event: GestureResponderEvent) => void;
  touchDisabled: boolean;
  isPostLiked: boolean;
  isCommunityFeed: boolean;
}

class Post extends PureComponent<PostProps> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.touchDisabled}
      >
        <>
          {this.props.isCommunityFeed ? (
            <CommunityPostHeader
              postedBy={this.props.username}
              time={this.props.postedAgo}
            />
          ) : (
            <UserInfoBar1
              username={this.props.username}
              communityName={this.props.communityName}
              postedAgo={this.props.postedAgo}
            />
          )}

          <H6Bold pb="8px" pl="8px" pr="8px" pt="8px">
            {this.props.title}
          </H6Bold>
          <Body2 mb="8px" pl="8px" pr="8px" pt="8px">
            {this.props.content}
          </Body2>
          <BottomBar1
            isPostLiked={this.props.isPostLiked}
            voteCount={this.props.voteCount}
            commentCount={this.props.commentCount}
            onLikePress={this.props.onLikePress}
          />
        </>
      </TouchableOpacity>
    );
  }
}

export default Post;
