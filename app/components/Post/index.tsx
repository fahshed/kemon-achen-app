import React, { PureComponent } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

import { Body2, Container, H6Bold } from '../../styles';
import BottomBar1 from '../BottomBar1';
import UserInfobar1 from '../UserInfoBar1';
import UserInfoBar2 from '../UserInfoBar2';
import CommunityPostHeader from '../CommunityPostHeader';

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
  isProfileFeed: boolean;
}

class Post extends PureComponent<PostProps> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.touchDisabled}
      >
        {this.props.isCommunityFeed ? (
          <CommunityPostHeader
            postedBy={this.props.username}
            time={this.props.postedAgo}
          />
        ) : this.props.isProfileFeed ? (
          <UserInfoBar2
            username={this.props.username}
            communityName={this.props.communityName}
            postedAgo={this.props.postedAgo}
          />
        ) : (
          <UserInfobar1
            username={this.props.username}
            communityName={this.props.communityName}
            postedAgo={this.props.postedAgo}
          />
        )}

        <Container justify="flex-start" align="flex-start" p="8px">
          <H6Bold mb="8px">{this.props.title}</H6Bold>
          <Body2>{this.props.content}</Body2>
        </Container>

        <BottomBar1
          isPostLiked={this.props.isPostLiked}
          voteCount={this.props.voteCount}
          commentCount={this.props.commentCount}
          onLikePress={this.props.onLikePress}
        />
      </TouchableOpacity>
    );
  }
}

export default Post;
