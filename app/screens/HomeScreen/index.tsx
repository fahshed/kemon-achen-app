import React, { useEffect } from 'react';
import { View } from 'react-native';

import { Client } from '../../api';
import { useApi } from '../../hooks';
import { Body1 } from '../../styles';

export default function HomeScreen() {
  const { data, request: getFeed } = useApi(Client.prototype.getFeed);
  useEffect(() => {
    (async function () {
      const response = await getFeed();
      if ('error' in response) {
        //console.log('user', user);
        console.log('Feed fetch error', response.error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{ padding: 8 }}>
      <Body1>{JSON.stringify(data)}</Body1>
    </View>
  );
}
