import React from 'react';

import { useFormikContext } from 'formik';

import { AppButton } from '../..';

function SubmitButton({ title, color = 'primary', style = null }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      color={color}
      style={style}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;
