import React, { PureComponent } from 'react';

import { Body2, H6Bold } from '../../styles';
import BottomBar1 from '../BottomBar1';
import UserInfoBar1 from '../UserInfoBar1';

// function Post({
//   content,
//   commentCount = 0,
//   communityName,
//   postedAgo,
//   title,
//   username,
//   voteCount,
// }) {
//   return (
//     <>
//       <UserInfoBar1
//         username={username}
//         communityName={communityName}
//         postedAgo={postedAgo}
//       />
//       <H6Bold pb="8px" pl="8px" pr="8px" pt="8px">
//         {title}
//       </H6Bold>
//       <Body2 mb="8px" pl="8px" pr="8px" pt="8px">
//         {content}
//       </Body2>
//       <BottomBar1 voteCount={voteCount} commentCount={commentCount} />
//     </>
//   );
// }

interface PostProps {
  username: string;
  communityName: string;
  postedAgo: string;
  title: string;
  content: string;
  voteCount: Number;
  comentCount: Number;
}

class Post extends PureComponent<PostProps> {
  render() {
    return (
      <>
        <UserInfoBar1
          username={this.props.username}
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
          commentCount={this.props.comentCount}
        />
      </>
    );
  }
}

export default Post;
