import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Yup from 'yup';

import { theme } from '../../config';
import Api from '../../api';
import { Form, FormField, SubmitButton } from '../../components/FormComponents';
import ErrorMessage from '../../components/FormComponents/ErrorMessage';
import { useApi, useAuth } from '../../hooks';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function LoginScreen() {
  const auth = useAuth();
  const userApi = useApi(Api.loginUser);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    // try {
    //   const response = await Api.loginUser({ email, password });
    //   //const { data: response, request: userLogin } = useApi(Api.loginUser);
    //   //userLogin({ email, password });
    //   console.log(response);
    //   auth.logIn(response);
    // } catch (error) {
    //   setLoginFailed(true);
    // }
    userApi.request({ email, password });
    console.log('param + ', { email, password });
    console.log(userApi.data);
    auth.logIn(userApi.data);
    setLoginFailed(userApi.error);
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
              style={{ marginLeft: 8 }}
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
              style={{ marginLeft: 8 }}
            />
          }
          name="password"
          placeholder="Enter your Password"
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
