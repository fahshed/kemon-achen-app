import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { ItemSeparator, Post } from '../../components';
import { theme } from '../../config';
import NavRoutes from '../../navigation/NavRoutes';

import { fetchPosts, likePost } from '../../store/reducers';
import { useAppDispatch, useAppSelector } from '../../store';
import { H5Bold } from '../../styles';

export default function HomeScreen({ navigation }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const { entities, page } = useAppSelector((state) => state.Post);

  const posts = Object.values(entities);

  const handleLikePress = async (postId) => {
    dispatch(
      likePost({
        postId,
        likeOption: !entities[postId].isLikedByCurrentUser ? 'like' : 'unlike',
      }),
    );
  };

  const renderItem = ({ item }) => (
    <Post
      touchDisabled={false}
      content={item.content}
      commentCount={item.commentCount}
      communityName={item.community.name}
      postedAgo={item.createdAt}
      title={item.title}
      username={item.postedBy.name}
      voteCount={item.voteCount}
      onLikePress={() => handleLikePress(item._id)}
      isPostLiked={entities[item._id].isLikedByCurrentUser}
      onPress={() => {
        navigation.navigate(NavRoutes.POST_DETAILS, item._id);
      }}
      isCommunityFeed={false}
      isProfileFeed={false}
    />
  );

  const getHomeFeed = async () => {
    const response = await dispatch(fetchPosts({ page: page + 1, limit: 5 }));
    if ('error' in response) {
      console.log('Feed fetch error', response.error);
    }
    console.log('hello');
  };

  useEffect(() => {
    getHomeFeed();
  }, []);

  return (
    <>
      {/* <TopSearchBar2 /> */}
      {isRefreshing && (
        <H5Bold align="center" color="grey5" mt="8px" mb="8px">
          Feed Loading........
        </H5Bold>
      )}

      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(post) => post._id}
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          getHomeFeed();
          setIsRefreshing(false);
        }}
        renderItem={renderItem}
        onEndReachedThreshold={0.01}
        onEndReached={getHomeFeed}
      />
    </>
  );
}
