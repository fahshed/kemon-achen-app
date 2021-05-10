import React from 'react';
import { View } from 'react-native';

import { useFormikContext } from 'formik';

import { AppTextInput } from '../..';
import ErrorMessage from '../ErrorMessage';
import { Body1Bold } from '../../../styles';
import { capitalizeFirstLetter } from '../../../utils';

function FormField({ name, width = '100%', ...textInputProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <View style={{ marginTop: 8 }}>
        <Body1Bold color="primary">{capitalizeFirstLetter(name)}</Body1Bold>
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          //style={{ padding: 8 }}
          value={values[name]}
          width={width}
          {...textInputProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
}

export default FormField;
