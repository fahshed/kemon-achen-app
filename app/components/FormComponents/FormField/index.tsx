import React from 'react';

import { useFormikContext } from 'formik';

import { AppTextInput } from '../..';
import ErrorMessage from '../ErrorMessage';
import { Body1Bold } from '../../../styles';
import { capitalizeFirstLetter } from '../../../utils';
import { theme } from '../../../config';

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
      <Body1Bold color="primary">{capitalizeFirstLetter(name)}</Body1Bold>
      <AppTextInput
        style={{ padding: 8, color: theme.black, fontSize: 16 }}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...textInputProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
