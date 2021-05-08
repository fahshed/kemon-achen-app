import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

import { theme } from '../../config';
import Api from '../../api';
import { Form, FormField, SubmitButton } from '../../components/FormComponents';
import ErrorMessage from '../../components/FormComponents/ErrorMessage';
import { useAuth } from '../../hooks';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function LoginScreen() {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      const response = await Api.loginUser({ email, password });
      auth.logIn(response);
    } catch (error) {
      setLoginFailed(true);
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
              style={{ padding: 8 }}
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
              style={{ padding: 8 }}
            />
          }
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <ErrorMessage
          error="Invalid Email or Password.Please try again."
          visible={loginFailed}
        />
        <SubmitButton title="Login" />
      </Form>
    </View>
  );
}

export default LoginScreen;
