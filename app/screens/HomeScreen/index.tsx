import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Client } from '../../api';
import { ItemSeparator, Post, TopSearchBar1 } from '../../components';
import { theme } from '../../config';
import { useApi } from '../../hooks';

export default function HomeScreen({ navigation }) {
  const { data: posts, request: getFeed } = useApi(Client.prototype.getFeed);
  useEffect(() => {
    (async function () {
      const response = await getFeed();
      if ('error' in response) {
        console.log('Feed fetch error', response.error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <View style={{ padding: 8 }}>
      <TopSearchBar1
        IconComponent={
          <MaterialCommunityIcons
            color={theme.grey6}
            name="search-web"
            size={24}
          />
        }
      />
      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={4} color={theme.lemon} />
        )}
        keyExtractor={(post) => post._id}
        renderItem={({ item }) => <Post postObj={item} />}
      />
    </View>
  );
}
