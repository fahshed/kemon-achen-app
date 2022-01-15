import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import * as Yup from 'yup';

import { Form, FormField, SubmitButton } from '../../components/FormComponents';
import { H5Bold, Container, Body2, Body1Bold } from '../../styles';
import { useAppDispatch } from '../../store';
import { signupProfessional } from '../../store/reducers';

const tags = ['PTSD', 'Stress', 'Anxiety', 'Eating Disorder'];

function ProfessionalSignupScreen() {
  const dispatch = useAppDispatch();

  const [specializations, setSpecializations] = useState(
    tags.map((tag) => [tag, false]),
  );

  const onSubmit = async ({ email, password, name, license }) => {
    const response = await dispatch(
      signupProfessional({
        email,
        password,
        name,
        license,
        image: `https://picsum.photos/seed/${new Date()}/300`,
        specializations: specializations
          .filter((entry) => entry[1] === true)
          .map((entry) => entry[0].toString()),
      }),
    );
    if ('error' in response) {
      console.log('ProfessionalSignupScreen', response.error);
    }
    // console.log(email, password, name, license);
  };

  return (
    <View style={{ padding: 8, flex: 1 }}>
      <Form
        initialValues={{ email: '', password: '', name: '', license: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Container direction="row" justify="space-between" mt="16px" mb="16px">
          <H5Bold ml="8px" color="secondary">
            As Professional User
          </H5Bold>

          <Container width="auto">
            <SubmitButton title="Signup" color="secondary" small={true} />
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
          name="license"
          placeholder="Enter your professional license no."
        />
      </Form>

      <Body1Bold ml="8px" mt="8px" mb="8px">
        Select your specializations
      </Body1Bold>
      <Container
        direction="row"
        justify="flex-start"
        wrap="wrap"
        align="flex-start"
      >
        {specializations.map(([label, value], index) => (
          <OptionButton
            key={index}
            onSelect={() =>
              setSpecializations([
                ...specializations.slice(0, index),
                [label, !value],
                ...specializations.slice(index + 1),
              ])
            }
            label={label}
            selected={value}
          />
        ))}
      </Container>
    </View>
  );
}

export default ProfessionalSignupScreen;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
  name: Yup.string().required().label('Name'),
  license: Yup.string().required().label('License'),
});

function OptionButton({ label, selected, onSelect }) {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={onSelect}
      style={{ marginRight: 8, marginBottom: 8 }}
    >
      <Container
        bg={selected ? 'secondary' : 'white'}
        p={selected ? '8px' : '7px'}
        corner="16px"
        border={selected ? '0px' : '1px'}
        bc="secondary"
      >
        <Body2 color={selected ? 'white' : 'secondary'}>{label}</Body2>
      </Container>
    </TouchableOpacity>
  );
}
