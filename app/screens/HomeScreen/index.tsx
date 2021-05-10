import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { Sample } from '../../components';
import { Body2Bold } from '../../styles';
import Api from '../../api';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: '', role: '' });

  useEffect(() => {
    (async function () {
      try {
        const credentials = {
          email: 'akil@gmail.com',
          password: '123456',
        };
        const response = await Api.loginUser(credentials);
        setUserInfo({ name: response.name, role: response.role });
        setLoading(false);
        //console.log('\nIn Home screen\n', response.jwt);
      } catch (e) {
        //console.log('Error /loginUser', e);
      }
    })();
  }, []);

  return (
    <View style={{ padding: 8 }}>
      <Sample
        status="resolved"
        createdAt={new Date()}
        ticketType="Rick and Morty"
        description="I'm Mr Misix"
        style={{ marginBottom: 16 }}
      />
      {loading ? (
        <Body2Bold>Loading...</Body2Bold>
      ) : (
        <>
          <Body2Bold>Name: {userInfo.name}</Body2Bold>
          <Body2Bold>Role: {userInfo.role}</Body2Bold>
        </>
      )}
    </View>
  );
}
