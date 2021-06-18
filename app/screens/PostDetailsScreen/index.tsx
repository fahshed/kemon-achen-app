import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import {
  AddCommentBottomBar,
  Comment,
  ItemSeparator,
  Post,
  RankBadgeComponent,
} from '../../components';

import { theme } from '../../config';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  createComment,
  fetchPostDetails,
  likePost,
} from '../../store/reducers/Posts';

function PostDetailsScreen({ route }) {
  const [commentText, setCommentText] = useState('');
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector((state) => state.Post);

  const postID = route.params;
  const post = entities[postID];

  const getPostDetails = async () => {
    const response = await dispatch(fetchPostDetails(postID));
    if ('error' in response) {
      console.log('Post details fetch error', response.error);
    }
  };

  const handleLikePress = async (postId) => {
    dispatch(
      likePost({
        postId,
        likeOption: !post.isLikedByCurrentUser ? 'like' : 'unlike',
      }),
    );
  };

  const handleCommentCreate = async (postId, comment) => {
    dispatch(createComment({ postId, comment }));
  };

  const renderItem = ({ item }) => (
    <Comment
      commenterName={item.postedBy.name}
      commentBody={item.content}
      commentedAgo={item.createdAt}
      commentLikeCount={item.voteCount}
      RankBadgeComponent={
        item.postedBy.rank && <RankBadgeComponent rank={item.postedBy.rank} />
      }
    />
  );
  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <>
      <Post
        touchDisabled={true}
        content={post.content}
        commentCount={post.commentCount}
        communityName={post.community.name}
        postedAgo={post.createdAt}
        title={post.title}
        username={post.postedBy.name}
        voteCount={post.voteCount}
        onLikePress={() => handleLikePress(postID)}
        isPostLiked={post.isLikedByCurrentUser}
        onPress={null}
      />

      <ItemSeparator height={8} color={theme.grey3} />
      <FlatList
        data={post.comments}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(comment) => comment._id}
        renderItem={renderItem}
      />

      <AddCommentBottomBar
        onChangeText={(text) => setCommentText(text)}
        onPress={() => handleCommentCreate(postID, commentText)}
      />
    </>
  );
}

export default PostDetailsScreen;
