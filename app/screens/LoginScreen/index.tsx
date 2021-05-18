import React from 'react';
import { Image, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

import { theme } from '../../config';
import { Client } from '../../api';
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from '../../components/FormComponents';
import { useAuth, useApi } from '../../hooks';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function LoginScreen() {
  const auth = useAuth();
  const { data, error, loading, request: loginUser } = useApi(
    Client.prototype.loginUser,
  );

  const handleSubmit = async ({ email, password }) => {
    const response = await loginUser({ email, password });
    if ('error' in response) {
      console.log('LoginScreen', response.error);
    } else {
      auth.logIn(response);
    }
  };

  return (
    <View style={{ padding: 8 }}>
      <Image
        style={{
          width: 80,
          height: 80,
          alignSelf: 'center',
          marginTop: 80,
          marginBottom: 20,
        }}
        source={require('../../assets/logo-red.png')}
      />

      <Form
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          IconComponent={
            <MaterialCommunityIcons
              color={theme.grey6}
              name="email"
              size={24}
              style={{ marginLeft: 8, marginRight: 8 }}
            />
          }
          keyboardType="email-address"
          name="email"
          placeholder="Enter your Email"
          textContentType="emailAddress"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          IconComponent={
            <MaterialCommunityIcons
              color={theme.grey6}
              name="lock"
              size={24}
              style={{ marginLeft: 8, marginRight: 8 }}
            />
          }
          name="password"
          placeholder="Enter your Password"
          secureTextEntry
          textContentType="password"
        />

        <ErrorMessage error={JSON.stringify(data)} visible={error} />

        {!loading && <SubmitButton title="Login" />}
      </Form>
    </View>
  );
}

export default LoginScreen;
