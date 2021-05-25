import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { ItemSeparator, Post, TopSearchBar2 } from '../../components';
import { theme } from '../../config';
import NavRoutes from '../../navigation/NavRoutes';
// import { H5Bold } from '../../styles';

import { fetchPosts, likePost } from '../../store/reducers';
import { useAppDispatch, useAppSelector } from '../../store';

export default function HomeScreen({ navigation }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const { entities } = useAppSelector((state) => state.Post);

  const posts = Object.values(entities);

  const handleLikePress = async (postId) => {
    dispatch(likePost({ postId, likeOption: 'like' }));
  };

  const renderItem = ({ item }) => (
    <Post
      content={item.content}
      commentCount={item.commentCount}
      communityName={item.community.name}
      postedAgo={item.createdAt}
      title={item.title}
      username={item.postedBy.name}
      voteCount={item.voteCount}
      onLikePress={() => handleLikePress(item._id)}
      onPress={() => navigation.navigate(NavRoutes.POST_DETAILS, item)}
    />
  );

  const getHomeFeed = async () => {
    const response = await dispatch(fetchPosts());
    if ('error' in response) {
      console.log('Feed fetch error', response.error);
    }
    setIsRefreshing(false);
  };

  useEffect(() => {
    getHomeFeed();
  }, []);

  return (
    <>
      <TopSearchBar2 />
      {/* {feedLoading && (
        <H5Bold align="center" color="grey5" mt="8px" mb="8px">
          Feed Loading........
        </H5Bold>
      )} */}

      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(post) => post._id}
        refreshing={isRefreshing}
        onRefresh={() => {
          getHomeFeed();
          setIsRefreshing(true);
        }}
        renderItem={renderItem}
      />
    </>
  );
}
