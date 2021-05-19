import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Client } from '../../api';
import { ItemSeparator, Post, TopSearchBar2 } from '../../components';
import { theme } from '../../config';
import { useApi } from '../../hooks';
import NavRoutes from '../../navigation/NavRoutes';
import { H5Bold } from '../../styles';

export default function HomeScreen({ navigation }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data: posts, loading: feedLoading, request: getFeed } = useApi(
    Client.prototype.getFeed,
  );

  const { request: pressLike } = useApi(Client.prototype.likePost);

  const handleLikePress = async (postId) => {
    //console.log('post id', postId);
    const response = await pressLike(postId);
    if ('error' in response) {
      console.log('Like error', response.error);
    }
  };

  const getHomeFeed = async () => {
    console.log('hey');
    const response = await getFeed();
    if ('error' in response) {
      console.log('Feed fetch error', response.error);
    }
    setIsRefreshing(false);
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

  useEffect(() => {
    getHomeFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopSearchBar2 />
      {feedLoading && (
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
          getHomeFeed();
          setIsRefreshing(true);
        }}
        renderItem={renderItem}
      />
    </>
  );
}
