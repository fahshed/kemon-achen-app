import React from 'react';
import { View } from 'react-native';

import * as Yup from 'yup';

import { Form, FormField, SubmitButton } from '../../components/FormComponents';
import { H5Bold, Container } from '../../styles';
import { useAppDispatch } from '../../store';
import { signupRegular } from '../../store/reducers';

function RegularSignupScreen() {
  const dispatch = useAppDispatch();

  const onSubmit = async ({ email, password, name, pseudonym }) => {
    const response = await dispatch(
      signupRegular({
        email,
        password,
        name,
        pseudonym,
        image: `https://picsum.photos/seed/${new Date()}/300`,
      }),
    );
    if ('error' in response) {
      console.log('RegularSignupScreen', response.error);
    }
    // console.log(email, password, name, pseudonym);
  };

  return (
    <View style={{ padding: 8, flex: 1 }}>
      <Form
        initialValues={{ email: '', password: '', name: '', pseudonym: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Container direction="row" justify="space-between" mt="16px" mb="16px">
          <H5Bold ml="8px" color="primary">
            As Regular User
          </H5Bold>

          <Container width="auto">
            <SubmitButton title="Signup" small={true} />
          </Container>
        </Container>

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="Enter your Email"
          textContentType="emailAddress"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          placeholder="Enter your Password"
          secureTextEntry
          textContentType="password"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="name"
          placeholder="Enter your name"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="pseudonym"
          placeholder="Enter a pseudonym you'd like to use"
        />
      </Form>
    </View>
  );
}

export default RegularSignupScreen;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  name: Yup.string().required().label('Name'),
  pseudonym: Yup.string().required().label('Pseudonym'),
});
