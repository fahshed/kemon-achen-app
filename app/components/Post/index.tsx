import React, { PureComponent } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

import { Body2, Container, H6Bold } from '../../styles';
import BottomBar1 from '../BottomBar1';
import UserInfobar1 from '../UserInfoBar1';
import UserInfoBar2 from '../UserInfoBar2';
import CommunityPostHeader from '../CommunityPostHeader';
import TagComponent from '../Tag';

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
  postType: string;
  asPseudo: boolean;
  pseudonym: string;
  isSearchResult: boolean;
}

class Post extends PureComponent<PostProps> {
  public static defaultProps = {
    isSearchResult: false,
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        disabled={this.props.touchDisabled}
      >
        {this.props.isCommunityFeed ? (
          <CommunityPostHeader
            postedBy={
              this.props.asPseudo === true
                ? this.props.pseudonym
                : this.props.username
            }
            time={this.props.postedAgo}
          />
        ) : this.props.isProfileFeed ? (
          <UserInfoBar2
            username={
              this.props.asPseudo === true
                ? this.props.pseudonym
                : this.props.username
            }
            communityName={this.props.communityName}
            postedAgo={this.props.postedAgo}
          />
        ) : (
          <UserInfobar1
            username={
              this.props.asPseudo === true
                ? this.props.pseudonym
                : this.props.username
            }
            communityName={this.props.communityName}
            postedAgo={this.props.postedAgo}
          />
        )}

        <Container justify="flex-start" align="flex-start" p="8px">
          <H6Bold>{this.props.title}</H6Bold>

          <Container align="flex-start" pt="4px" pb="8px">
            {this.props.postType && this.props.postType !== 'General' && (
              <TagComponent badgeContent={this.props.postType} postTag={1} />
            )}
          </Container>

          <Body2>{this.props.content}</Body2>
        </Container>

        {!this.props.isSearchResult && (
          <BottomBar1
            isPostLiked={this.props.isPostLiked}
            voteCount={this.props.voteCount}
            commentCount={this.props.commentCount}
            onLikePress={this.props.onLikePress}
          />
        )}
      </TouchableOpacity>
    );
  }
}

export default Post;
