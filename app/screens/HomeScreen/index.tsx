import React from 'react';
import { View } from 'react-native';

// import { Client } from '../../api';
// import { useApi, useAuth } from '../../hooks';
import { Body1 } from '../../styles';

export default function HomeScreen() {
  // const { user } = useAuth();
  // const { data, request: getFeed } = useApi(Client.prototype.getPostsByUserId);
  // useEffect(() => {
  //   (async function () {
  //     const response = await getFeed({});
  //     if ('error' in response) {
  //       console.log('Feed fetch error', response.error);
  //     }
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <View style={{ padding: 8 }}>
      <Body1>Home screen</Body1>
    </View>
  );
}
