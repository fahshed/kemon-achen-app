import React from 'react';

import { AddCommentBottomBar, Post } from '../../components';

function PostDetailsScreen({ route }) {
  const post = route.params;
  return (
    <>
      {/* <Body2Bold>{JSON.stringify(post)}</Body2Bold> */}
      <Post
        content={post.content}
        commentCount={post.commentCount}
        communityName={post.community.name}
        postedAgo={post.createdAt}
        title={post.title}
        username={post.postedBy.name}
        voteCount={post.voteCount}
        onLikePress={null}
        onPress={null}
      />

      <AddCommentBottomBar />
    </>
  );
}

export default PostDetailsScreen;
