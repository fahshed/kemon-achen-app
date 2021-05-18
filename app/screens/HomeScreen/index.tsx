import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Client } from '../../api';
import { ItemSeparator, Post, TopSearchBar2 } from '../../components';
import { theme } from '../../config';
import { useApi } from '../../hooks';

export default function HomeScreen() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data: posts, request: getFeed } = useApi(Client.prototype.getFeed);

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
      comentCount={item.commentCount}
      communityName={item.community.name}
      postedAgo={item.createdAt}
      title={item.title}
      username={item.postedBy.name}
      voteCount={item.voteCount}
    />
  );

  useEffect(() => {
    getHomeFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TopSearchBar2 />
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
